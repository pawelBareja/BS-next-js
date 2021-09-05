import TextLoop from 'react-text-loop';

export const TextBlock = () => {
  return (
    <div className={'hero__textblock'}>
      <h2 className={'hero__subtitle'}>Bareja Studio</h2>
      <h1 className={'hero__title'}>
        What you need?
        <br />
        <TextLoop
          springConfig={{ stiffness: 200, damping: 30, interval: 3000 }}
        >
          <h1>Web Developement</h1>
          <h1>Online Shop</h1>
          <h1>Web Analytics</h1>
        </TextLoop>
      </h1>
      <style jsx>
        {`
          .hero__textblock{
              position:absolute;
              left:-25px;
              top:30%;
          }
          .hero__subtitle{
            position:relative;
            width:160px;
              text-align:right;
              padding: 5px 0 0 0;
              border-top:2px solid black;
          }
          // DODAC KOLORY JAKO ZMIENEN 
        //   .hero__subtitle:after{
        //     content:'';
        //    position:absolute;
        //    left:0;
        //    top:0;
        //    width:10vw;
        //    height:2px;
        //    background:black;            
        // }

          .hero__title {
              margin-top:20px;
              calc(100vw - 120px);
          }

          @media (max-width:992px){
            .hero__textblock{
              left:25px;
              top:20%;
          }
          }
        `}
      </style>
    </div>
  );
};
