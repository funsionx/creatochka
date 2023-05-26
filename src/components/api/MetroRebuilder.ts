const MetroRebuilder = (data: any) => {
  return data?.data.data.map(
    (item: { name: string; id: string }) => ({
      label: item.name,
      value: item.id,
    })
  );
}

export default MetroRebuilder

// "stationValue": "Преображенская площадь",
//             "stationId": "7d2f2267-3936-3d73-755e-ba3208da09fd",
//             "lineValue": "Сокольническая",
//             "color": "DB2128",
//             "railwayStation": false