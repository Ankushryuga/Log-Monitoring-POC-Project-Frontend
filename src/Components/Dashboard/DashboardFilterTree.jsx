// import React, { version } from 'react';
// /*** there is slight change in filter option 
//  * Now Filter For, Data Period, and Date Period should come as child...
// */
// import SearchIcon from '@mui/icons-material/Search';
// export const DashboardFilterTree=[
//     {
//         id:'1',
//         root:<div>
//             <div>
//                 <label>Filter For</label>
//                 <label> | </label>
//                 <SearchIcon />
//                 <input type='numeric'placeholder='Enter your logs'></input>
//             </div>
//         </div>,
//         childern:[
//             {
//                 id:'2',
//                 sub_root_1:<div>
//                     <div>
//                         <label> Data Period</label>
//                         <label> | </label>
//                         <label> Date Period</label>
//                         <label> | </label>
//                         <input type="date" id="start-date" name="start-date" ></input>
//                         <input type="date" id="end-date" name="end-date" ></input>
//                     </div>
//                 </div>
//             }
//         ]
//     }
// ];


import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../../../stylesheets/treeDesign.css";
// Define the DashboardFilterTree structure
export const DashboardFilterTree = [
    {
        id: '1',
        root: (
            <div className='searchBox'>
            <div className='rootDiv'>
                <label className='filterfor'>Filter For </label>
                {/* <label> | </label> */}
                <div className='searchAlign'>
                <SearchIcon />
                <input className='searchInput' type='' placeholder='Enter your logs'/>
                </div>
                </div>
            </div>
            // <div className='grid-container-root'>
            //     <div className='grid-item-root'>
            //         <label>Filter for</label>
            //     </div>
            //     <div className='grid-item-root'>
            //         <SearchIcon />
            //         <input type='text' placeholder='Enter your logs'></input>
            //     </div>
            // </div>
            
        ),
        children: [
            {
                id: '2',
                sub_root_1: (

                    // <div className='subRoot'>
                    //     <label>Data Period</label>
                    //     <label className='horizonalLine'> | </label>
                    //     <label>Date Period</label>
                    //     <label className='horizonalLine'> | </label>
                    //     <input type="date" id="start-date" name="start-date"></input>
                    //     <input type="date" id="end-date" name="end-date"></input>
                    // </div>
                    // <div className='verticalLine'>
                    //      <div className="horizontalLine"></div>
                    // <div className='subRoot'>
                    //     <div>
                    //         <label>Data Period</label>
                    //         <label></label>
                    //     </div>
                    // </div>
                    // </div>
                    //  <div className="verticalLine">
                    //     <div className="horizontalLine"></div>
                    //     <div className="subRoot">
                    //         <label>Data Period</label>
                    //         <label className="horizonalLine">|</label>
                    //         <label>Date Period</label>
                    //         <label className="horizonalLine">|</label>
                    //         <input type="date" id="start-date" name="start-date" />
                    //         <input type="date" id="end-date" name="end-date" />
                    //     </div>
                    // </div>
                    <div className='children'>
                    <div className="verticalContainer">
                    <div className="verticalLine"></div>
                    {/* <div className='down'> */}
                    <div className="horizontalLine"></div>
                    <div className="subRoot">
                        <label className='filterfor'>Data Period</label>
                        <label className="horizonalLine">|</label>
                        <label className='filterfor'>Date Period</label>
                        <label className="horizonalLine">|</label>
                        <input type="date" id="start-date" name="start-date" />
                        <input type="date" id="end-date" name="end-date" />
                    </div>
                    {/* </div> */}
                </div>
                </div>
                )
            }
        ]
    }
];
