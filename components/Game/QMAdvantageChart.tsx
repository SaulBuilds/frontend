import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataItem {
  label: string;
  value: number;
  color: string;
}

interface QuantumAdvantageChartProps {
  data: DataItem[];
}

const QuantumAdvantageChart: React.FC<QuantumAdvantageChartProps> = ({ data }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove(); // Clear previous SVG content

      const width = 600;
      const height = 400;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      const x = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1).domain(data.map(d => d.label));
      const y = d3.scaleLinear().rangeRound([chartHeight, 0]).domain([0, d3.max(data, d => d.value) || 0]);

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.label)!)
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => chartHeight - y(d.value))
        .attr("fill", d => d.color);

      g.append("g")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(x));

      g.append("g")
        .call(d3.axisLeft(y));
    }
  }, [data]);

  return <svg className="d3-component" width={600} height={400} ref={d3Container} />;
};

export default QuantumAdvantageChart;
