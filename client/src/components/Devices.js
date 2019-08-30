import React from 'react';

const Devices = ({ devices }) => {
  return (
    <div>
      <table>
        <tr className="table-header">
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Device Model</th>
          <th>Device Type</th>
          <th>Battery Capacity (Wh)</th>
          <th>Max Power (W)</th>
        </tr>
        {devices.map(device => {
          const { manufacturer, model, deviceModel, deviceType, batteryCapacityWh, maxPowerW } = device;
          return (
            <tr>
              <td>{manufacturer}</td>
              <td>{model}</td>
              <td>{deviceModel}</td>
              <td>{deviceType}</td>
              <td>{batteryCapacityWh}</td>
              <td>{maxPowerW}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Devices;

