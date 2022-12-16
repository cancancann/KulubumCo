const Footer = () => {
  return (
    <div
      style={{
        background: '#02A28F',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '-webkit-fill-available',
        height: '50px',
        left: '-1px' /*margin bootom ayarlanacak*/,
      }}
    >
      <h5 style={{ textAlign: 'center', color: '#fff' }}>Provided by Legacy</h5>
    </div>
  );
};

export default Footer;
