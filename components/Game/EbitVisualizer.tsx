import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const QuantumOperationVisual = ({ onVisualizationComplete }: { onVisualizationComplete: () => void }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove(); 

      const width = 400, height = 200;
      svg.attr('width', width).attr('height', height);

      svg.append("line")
         .attr("x1", 100)
         .attr("y1", 100)
         .attr("x2", 300)
         .attr("y2", 100)
         .attr("stroke", "blue")
         .attr("stroke-width", 2)
         .transition()
         .duration(2000)
         .attr("stroke", "red")
         .on("end", () => {
           onVisualizationComplete(); 
         });
    }
  }, [onVisualizationComplete]); 

  return (
    <svg ref={d3Container}></svg>
  );
};

export default QuantumOperationVisual;