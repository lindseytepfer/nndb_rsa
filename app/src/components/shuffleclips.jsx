import React, { useState } from "react";


export const ShuffleClips = ( { setSequence, setDurations, pageEvent } ) => {

    const [selection, setSelection] = useState([]);
    const [length, setLength] = useState([]);

    const videoclips = {"12yearsaslave": { 0: "12yearsaslave_756_778",
    1: "12yearsaslave_2231_2254",
    2: "12yearsaslave_2299_2317",
    3: "12yearsaslave_2628_2648",
    4: "12yearsaslave_3513_3536",
    5: "12yearsaslave_3614_3637",
    6: "12yearsaslave_4747_4766",
    7: "12yearsaslave_5280_5303",
    8: "12yearsaslave_6341_6357",
    9: "12yearsaslave_7258_7276"},
    "500daysofsummer": { 0: "500daysofsummer_272_295",
    1: "500daysofsummer_546_563",
    2: "500daysofsummer_959_978",
    3: "500daysofsummer_1195_1217",
    4: "500daysofsummer_1349_1368",
    5: "500daysofsummer_1513_1531",
    6: "500daysofsummer_3185_3202",
    7: "500daysofsummer_3497_3517",
    8: "500daysofsummer_4454_4472",
    9: "500daysofsummer_4845_4864"},
    "backtothefuture": { 0: "backtothefuture_290_310",
    1: "backtothefuture_1120_1141",
    2: "backtothefuture_1521_1537",
    3: "backtothefuture_2510_2527",
    4: "backtothefuture_3932_3948",
    5: "backtothefuture_4292_4309",
    6: "backtothefuture_4598_4617",
    7: "backtothefuture_4748_4766",
    8: "backtothefuture_4987_5007",
    9: "backtothefuture_5276_5295"},
    "citizenfour": { 0: "citizenfour_1797_1820",
    1: "citizenfour_1797_1820",
    2: "citizenfour_2229_2245",
    3: "citizenfour_2284_2300",
    4: "citizenfour_2338_2360",
    5: "citizenfour_2373_2390",
    6: "citizenfour_2541_2561",
    7: "citizenfour_3735_3754",
    8: "citizenfour_4207_4227",
    9: "citizenfour_5724_5743"},
    "littlemisssunshine": { 0:"littlemisssunshine_581_602",
        1: "littlemisssunshine_1030_1052",
        2: "littlemisssunshine_1052_1070",
        3: "littlemisssunshine_2244_2261",
        4: "littlemisssunshine_2601_2620",
        5: "littlemisssunshine_3314_3332",
        6: "littlemisssunshine_3870_3891",
        7: "littlemisssunshine_4481_4504",
        8: "littlemisssunshine_4989_5013",
        9: "littlemisssunshine_5371_5394"},
    "pulpfiction": { 0: "pulpfiction_484_507",
        1:"pulpfiction_796_816",
        2:"pulpfiction_1968_198",
        3:"pulpfiction_3284_3301",
        4:"pulpfiction_4846_4867",
        5:"pulpfiction_5471_5491",
        6:"pulpfiction_6604_6628",
        7:"pulpfiction_6636_6660",
        8:"pulpfiction_6908_6926",
        9:"pulpfiction_7860_7883"},
    "split": { 0: "split_509_532",
        1:"split_832_854",
        2:"split_1528_1546",
        3:"split_1622_1644",
        4:"split_2416_2437",
        5:"split_3729_3747",
        6:"split_4118_4136",
        7:"split_4406_4426",
        8:"split_5609_5633",
        9:"split_6046_6065"},
    "theshawshankredemption": { 0: "theshawshankredemption_2464_2487",
        1:"theshawshankredemption_3336_3356",
        2:"theshawshankredemption_3817_3834",
        3:"theshawshankredemption_4724_4743",
        4:"theshawshankredemption_4978_4999",
        5:"theshawshankredemption_5285_5306",
        6:"theshawshankredemption_6054_6077",
        7:"theshawshankredemption_6376_6398",
        8:"theshawshankredemption_6454_6476",
        9:"theshawshankredemption_7358_7379"},
    "theprestige": { 0: "theprestige_1647_1663",
        1:"theprestige_2010_2031",
        2:"theprestige_2040_2060",
        3:"theprestige_3295_3317",
        4:"theprestige_4400_4416",
        5:"theprestige_5348_5371",
        6:"theprestige_5566_5583",
        7:"theprestige_5638_5660",
        8:"theprestige_6408_6428",
        9:"theprestige_6491_6510"},
    "theusualsuspects": { 0: "theusualsuspects_1299_1321",
        1:"theusualsuspects_1911_1927",
        2:"theusualsuspects_2626_2644",
        3:"theusualsuspects_2690_2709",
        4:"theusualsuspects_3566_3588",
        5:"theusualsuspects_3742_3764",
        6:"theusualsuspects_3869_3886",
        7:"theusualsuspects_5001_5018",
        8:"theusualsuspects_5384_5408",
        9:"theusualsuspects_5653_5673"}
    }
    
    const clipLengths = {'split_5609_5633': 24020,
    'split_3729_3747': 18020,
    'split_1622_1644': 22020,
    'split_4118_4136': 18020,
    'split_1528_1546': 18020,
    'split_832_854': 22020,
    'split_509_532': 23020,
    'split_4406_4426': 20020,
    'split_6046_6065': 19020,
    'split_2416_2437': 21020,
    'backtothefuture_1521_1537': 16020,
    'backtothefuture_4292_4309': 17020,
    'backtothefuture_5276_5295': 19020,
    'backtothefuture_2510_2527': 17020,
    'backtothefuture_290_310': 20020,
    'backtothefuture_4987_5007': 20020,
    'backtothefuture_4748_4766': 18020,
    'backtothefuture_4598_4617': 19020,
    'backtothefuture_3932_3948': 16020,
    'backtothefuture_1120_1141': 21020,
    'pulpfiction_7860_7883': 23020,
    'pulpfiction_6908_6926': 18020,
    'pulpfiction_6604_6628': 24020,
    'pulpfiction_6636_6660': 24020,
    'pulpfiction_1968_1984': 16020,
    'pulpfiction_3284_3301': 17020,
    'pulpfiction_484_507': 23020,
    'pulpfiction_796_816': 20020,
    'pulpfiction_5471_5491': 20020,
    'pulpfiction_4846_4867': 21020,
    'theusualsuspects_2626_2644': 18020,
    'theusualsuspects_5653_5673': 20020,
    'theusualsuspects_3869_3886': 17020,
    'theusualsuspects_2690_2709': 19020,
    'theusualsuspects_5001_5018': 17020,
    'theusualsuspects_1299_1321': 22020,
    'theusualsuspects_5384_5408': 24020,
    'theusualsuspects_3566_3588': 22020,
    'theusualsuspects_1911_1927': 16020,
    'theusualsuspects_3742_3764': 22020,
    'citizenfour_2338_2360': 22020,
    'citizenfour_3735_3754': 19020,
    'citizenfour_2541_2561': 20020,
    'citizenfour_2229_2245': 16020,
    'citizenfour_2373_2390': 17020,
    'citizenfour_4207_4227': 20020,
    'citizenfour_5724_5743': 19020,
    'citizenfour_1820_1844': 24030,
    'citizenfour_2284_2300': 16020,
    'citizenfour_1797_1820': 23020,
    'littlemisssunshine_4481_4504': 23020,
    'littlemisssunshine_2601_2620': 19020,
    'littlemisssunshine_3870_3891': 21020,
    'littlemisssunshine_4989_5013': 24020,
    'littlemisssunshine_5371_5394': 23020,
    'littlemisssunshine_2244_2261': 17020,
    'littlemisssunshine_1030_1052': 22020,
    'littlemisssunshine_1052_1070': 18020,
    'littlemisssunshine_581_602': 21020,
    'littlemisssunshine_3314_3332': 18020,
    '12yearsaslave_2231_2254': 23020,
    '12yearsaslave_2299_2317': 18020,
    '12yearsaslave_3513_3536': 23020,
    '12yearsaslave_756_778': 22020,
    '12yearsaslave_6341_6357': 16020,
    '12yearsaslave_2628_2648': 20020,
    '12yearsaslave_7258_7276': 18020,
    '12yearsaslave_3614_3637': 23020,
    '12yearsaslave_4747_4766': 19020,
    '12yearsaslave_5280_5303': 23020,
    '500daysofsummer_3185_3202': 17020,
    '500daysofsummer_959_978': 19020,
    '500daysofsummer_1513_1531': 18020,
    '500daysofsummer_272_295': 23020,
    '500daysofsummer_1349_1368': 19020,
    '500daysofsummer_4845_4864': 19020,
    '500daysofsummer_4454_4472': 18020,
    '500daysofsummer_3497_3517': 20020,
    '500daysofsummer_1195_1217': 22020,
    '500daysofsummer_546_563': 17020,
    'theprestige_3295_3317': 22020,
    'theprestige_5348_5371': 23020,
    'theprestige_2040_2060': 20020,
    'theprestige_5638_5660': 22020,
    'theprestige_6408_6428': 20020,
    'theprestige_6491_6510': 19020,
    'theprestige_2010_2031': 21020,
    'theprestige_5566_5583': 17020,
    'theprestige_4400_4416': 16020,
    'theprestige_1647_1663': 16020,
    'theshawshankredemption_4724_4743': 19020,
    'theshawshankredemption_2464_2487': 23020,
    'theshawshankredemption_7358_7379': 21020,
    'theshawshankredemption_6054_6077': 23020,
    'theshawshankredemption_3336_3356': 20020,
    'theshawshankredemption_4978_4999': 21020,
    'theshawshankredemption_3817_3834': 17020,
    'theshawshankredemption_5285_5306': 21020,
    'theshawshankredemption_6376_6398': 22020,
    'theshawshankredemption_6454_6476': 22020}
   

    const handleSelection = () => {
        for (let movie in videoclips) {
            selection.push(videoclips[movie][Math.floor(Math.random()*9)])
        }
    }
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const handleDurations = () => {
        selection.map(selection => { length.push(clipLengths[selection]) } );
    }

    const startTask = () => {
        handleSelection();
        shuffle(selection);
        handleDurations();
        setDurations(length);
        setSequence(selection);
        pageEvent();
    }

    return (
        <div className="container">
            <h1> Make sure your volume is turned on,<br/> and headphones if you need them! </h1>
            <p>When you are ready, press "start" to play the first video:</p>
            <button className='advance-button' onClick={startTask}>start</button>
        </div>
    )
}


