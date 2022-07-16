import { Rings } from 'react-loader-spinner';

const LoaderSpiner = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    aligniitems: 'center',
  };
  return (
    <div style={style}>
      <Rings color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderSpiner;
