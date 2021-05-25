export const specs = {
    input: {
        kvrating: {
            value: '830',
            field: 'KV Rating',
            unit: 'kv',
            defaultValue: 830,
            name: 'kvrating'
        },
        cellsInSeries: {
            value: '',
            field: 'Cells in series',
            unit: 'V',
            defaultValue: 5,
            name: 'cellsInSeries'
        },
        nominalVoltage: {
            value: '',
            field: 'Nominal Voltage',
            defaultValue: 18.5,
            name: 'nominalVoltage'
        },
        maxRPM: {
            value: '',
            field: 'No. load MAX RPM',
            defaultValue: 15340,
            name: 'maxRPM'
        },
        estimatedMaxPercent: {
            value: '',
            field: 'Estimated max percent',
            unit: '%',
            defaultValue: 85,
            name: 'estimatedMaxPercent'
        },
        maxWorkingRPM: {
            value: '',
            field: 'Max working RPM',
            unit: '%',
            defaultValue: null,
            name: 'maxWorkingRPM'
        },
        maxPower: {
            value: '',
            field: 'Max power',
            unit: 'Watt',
            defaultValue: 1000,
            name: 'maxPower'
        },
        altitude: {
            value: '',
            field: 'Altitude',
            unit: 'm',
            defaultValue: 0,
            name: 'altitude'
        },
        density: {
            value: '',
            field: 'Density',
            unit: 'kg/m^3',
            defaultValue: 1.225,
            name: 'density'
        }

    }
}