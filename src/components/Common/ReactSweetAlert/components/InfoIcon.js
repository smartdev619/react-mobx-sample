import React        from "react";
import objectAssign from "object-assign";
import styles       from "components/Common/ReactSweetAlert/styles/SweetAlertStyles";

export default () => (
    <div style={objectAssign({}, styles.icon, styles.iconInfo)}>
        <div style={styles.iconInfoBefore}></div>
        <div style={styles.iconInfoAfter}></div>
    </div>
);