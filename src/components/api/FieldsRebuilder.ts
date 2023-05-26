const FieldsRebuilder = (data: any) => {
  return data?.data.data.map(
    (item: { name: string; id: string }) => ({
      label: item.name,
      value: item.id,
    })
  );
}

export default FieldsRebuilder