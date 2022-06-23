import React from "react";
import styles from "./LeaderBoard.module.scss";

function LeaderBoard() {
  return (
    <div className={styles.box1}>
      <table className={styles.customers}>
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead>
          <tr className={styles.header}>
            <th>Rank</th>
            <th>Name</th>
            <th>Matches</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map((_, index) => {
            return (
              <tr key={index} className={styles.row}>
                <td>
                  <div>1</div>
                </td>
                <td>
                  <div>Rahul</div>
                </td>
                <td>
                  <div>40</div>
                </td>
                <td>
                  <div>450</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
