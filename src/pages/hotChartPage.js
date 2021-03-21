import React, { Component } from 'react';
import data from './data';
const echarts = require('echarts');
require('echarts/extension/bmap/bmap');

console.info(data);
export default class HotChartPage extends Component{
    constructor(){
        super();
        this.state = {
            formStatus:"hidden",
            editDatas:null
        }
    }
    renderHotChart() {
        // 基于准备好的dom，初始化echarts实例
        const dom = document.getElementById("hotMapContain");
        const myChart = echarts.init(dom);
        myChart.setOption({
            animation: false,
            bmap: {
                center: [116.322, 40.01],
                zoom: 14,
                roam: true
            },
            visualMap: {
                show: false,
                top: 'top',
                min: 0,
                max: 5,
                seriesIndex: 0,
                calculable: true,
                inRange: {
                    color: ['blue', 'blue', 'green', 'yellow', 'red']
                }
            },
            series: [{
                type: 'heatmap',
                coordinateSystem: 'bmap',
                data: data,
                pointSize: 5,
                blurSize: 6
            }]
        });
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
        
    }
    componentDidMount() {
        this.renderHotChart();
    }
    render(){
       
        return (
        <div id="hotMapContain" className="box100">
            
        </div>)
    }

}