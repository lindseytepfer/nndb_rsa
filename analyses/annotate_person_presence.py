import glob
import joblib
import pandas as pd
import numpy as np
import scipy.stats
import os
import cv2
import nibabel as nib

def pkl_to_array(pickle_path, video_path):
    data = dict(joblib.load(pickle_path))
    n_tracks = len(data)
    video = cv2.VideoCapture(video_path)
    frameCount = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    arr = np.zeros((n_tracks, frameCount))
    track_ids = list(data.keys())
    # track IDs are not always incremental by 1 and are not in order, so I use enumerate here
    for t, track in enumerate(track_ids):
        # Here, data.get(track) returns the second-level dictionary object for that specific track. I run get() on that
        # as well because it is also a dictionary, which will return an array of frame IDs for that track. 
        frameIDs = data.get(track).get('frame_ids')
        # Here I locate the row t (which corresponds to whatever iteration I'm on in my for loop) and I set all
        # indices that correspond to frame IDs in that track to 1.
        arr[t][frameIDs]=1
    return arr

def collapse(pickle_array):
    frames = pickle_array.shape[1]
    regr = np.zeros((frames))
    for frame in range(frames):
        # Here, we are iterating through each frame (each column at a time) and taking the sum of that column, 
        # then placing that number at the frame index in our output array. 
        regr[frame] = sum(pickle_array[:,frame])
    return regr

def tr_resample(regr_arr, vid_cap, TR, func_length, method='median'):
    #all timestamps are in milliseconds
    fps = float(vid_cap.get(cv2.CAP_PROP_FPS))
    framecount = int(vid_cap.get(cv2.CAP_PROP_FRAME_COUNT))
    video_timestamps = [(1/fps)*1000*frame for frame in range(framecount)]
    brain_timestamps = [TR*1000*tr for tr in range(func_length)]
    if method=='mode':
        func = lambda x: scipy.stats.mode(x, nan_policy='omit')[0]
    elif method=='average':
        func = lambda x: np.nanmean(x)
    elif method=='min':
        func = np.nanmin 
    elif method=='max':
        func = np.nanmax 
    elif method=='median':
        func = np.nanmedian
    out = []
    def find_nearest(array, value):
        array = np.asarray(array)
        idx = (np.abs(array - value)).argmin()
        return idx
    for stamp in range(func_length):
        in_time = brain_timestamps[stamp]
        out_time = in_time+1000*TR
        in_frame, out_frame = find_nearest(video_timestamps, in_time), find_nearest(video_timestamps, out_time)
        regr_frames = regr_arr[in_frame:out_frame]
        out.append(func(regr_frames))
    return np.array(out)

    vidnames = ['the_prestige','12_years_a_slave','500_days_of_summer','back_to_the_future','citizenfour',
            'little_miss_sunshine', 'pulp_fiction','split','the_shawshank_redemption','the_usual_suspects']

    # get one subject for each movie and get number of TRs for each movie

corresponding_subs = ['/Volumes/Scraplab/data/ds002837/derivatives/sub-59/func/sub-59_task-theprestige_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-82/func/sub-82_task-12yearsaslave_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-20/func/sub-20_task-500daysofsummer_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-64/func/sub-64_task-backtothefuture_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-38/func/sub-38_task-citizenfour_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-77/func/sub-77_task-littlemisssunshine_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-49/func/sub-49_task-pulpfiction_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-74/func/sub-74_task-split_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-54/func/sub-54_task-theshawshankredemption_bold_blur_censor.nii.gz',
                     '/Volumes/Scraplab/data/ds002837/derivatives/sub-43/func/sub-43_task-theusualsuspects_bold_blur_censor.nii.gz']

movie_lengths = []
for i in corresponding_subs:
    movie_lengths.append(nib.load(i).shape[3])

movie_dict = dict(zip(vidnames, movie_lengths))

for video in vidnames:
    vidpath = '/Volumes/Scraplab/stimuli/'+video+'.mp4'
    pklpath = '/Volumes/Scraplab/data/psypose_outs/psypose_pare_nndb_outs/'+video+'_data/psypose_bodies.pkl'
    pkl_arr = pkl_to_array(pklpath, vidpath)
    regr_arr = collapse(pkl_arr)
    vid_cap = cv2.VideoCapture(vidpath)
    n_tr = movie_dict[video]
    resamp_arr = tr_resample(regr_arr, vid_cap, 1, n_tr)
    resamp_df = pd.DataFrame(resamp_arr)
    print("movie name: ", video, "resampled array shape:", resamp_arr.shape, 'resampled df shape:', resamp_df.shape, "length of TR: ", n_tr)
    resamp_df.to_csv(video+"_regressor.csv", index=False)
    cv2.destroyAllWindows()