export default function FlexCenterBox() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width }}>
      {children}
    </Box>
  );
}
