// import React from "react";
// import Menu from "../Menu/Menu.jsx";
// import { DashboardFilterTree } from "./DashboardFilterTree.jsx";

// // Component to render each tree item recursively
// const renderTree = (nodes) => (
//     <div key={nodes.id}>
//         {nodes.root}
//         {nodes.children && nodes.children.map((child) => (
//             <div key={child.id} style={{ marginLeft: '20px' }}>
//                 {child.sub_root_1}
//             </div>
//         ))}
//     </div>
// );

// const Dashboard = () => {
//     return (
//         <div>
//             <Menu />
//             {DashboardFilterTree.map((tree) => renderTree(tree))}
//         </div>
//     );
// };

// export default Dashboard;

import React from "react";
import Menu from "../Menu/Menu.jsx";
import { DashboardFilterTree } from "./DashboardFilterTree.jsx";

// Component to render each tree item recursively
const renderTree = (nodes) => (
    <div key={nodes.id}>
        {nodes.root}
        {nodes.children && nodes.children.map((child) => (
            <div key={child.id}>
                {child.sub_root_1}
            </div>
        ))}
    </div>
);

const Dashboard = () => {
    return (
        <div>
            <Menu />
            {DashboardFilterTree.map((tree) => renderTree(tree))}
        </div>
    );
};

export default Dashboard;
