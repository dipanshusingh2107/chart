import { createChart, ColorType,CrosshairMode } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const ChartComponent = props => {
    const data = props.data;
	

    const backgroundColor = '#131722';
    const lineColor = '#2962FF';
    const textColor = '#d1d4dc';
    const areaTopColor = '#2962FF';
    const areaBottomColor = 'rgba(41, 98, 255, 0.28)';
		
	
	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			});
            chart.applyOptions({
                crosshair: {
                    mode:CrosshairMode.Normal,    
                },
            });
			chart.timeScale().fitContent();

			const newSeries = chart.addCandlestickSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};

export default ChartComponent;


