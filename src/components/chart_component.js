import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine,SparklinesBars } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        {/* <SparklinesBars style={{ fill: "#41c3f9" }} /> */}
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
}
