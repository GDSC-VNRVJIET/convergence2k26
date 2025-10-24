import DomeGallery from '../components/DomeGallery';
import { StarsBackground } from '@/components/StarsBackground';

export default function Clubs() {
  // 30+ club logos - using placeholder images for now
  const clubImages = [
    { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop', alt: 'ACM' },
    { src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop', alt: 'ASME' },
    { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop', alt: 'CSI' },
    { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop', alt: 'DATAQUESTERS' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop', alt: 'GDGC' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop', alt: 'GV' },
    { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop', alt: 'ICI' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop', alt: 'IE' },
    { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop', alt: 'IEEE' },
    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop', alt: 'IEEE CASS' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop', alt: 'IEEE CS' },
    { src: 'https://images.unsplash.com/photo-1635070041409-e63e783b9f87?w=400&h=400&fit=crop', alt: 'IEEE NANO' },
    { src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop', alt: 'IEEE PES' },
    { src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=400&fit=crop', alt: 'IEEE SENSORS' },
    { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop', alt: 'IEEE SPS' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', alt: 'IEEE WIE' },
    { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop', alt: 'IEEE MTT' },
    { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop', alt: 'IETE' },
    { src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop', alt: 'IGBC' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop', alt: 'ISOI' },
    { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop', alt: 'ISTE' },
    { src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop', alt: 'IUCEE' },
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop', alt: 'Krithomedh' },
    { src: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&h=400&fit=crop', alt: 'MIH' },
    { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop', alt: 'SAE' },
    { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop', alt: 'TURING HUT' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop', alt: 'VJ ARC' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop', alt: 'Tech Club 1' },
    { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop', alt: 'Tech Club 2' },
    { src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop', alt: 'Tech Club 3' },
  ];

  return (
    <StarsBackground className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <section className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Organised by
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Convergence 2K26 is brought to you by 30+ student clubs and technical societies working together to create an unforgettable experience
          </p>
        </div>

        <div className="relative w-full" style={{ height: '700px' }}>
          <DomeGallery
            images={clubImages}
            fit={0.6}
            fitBasis="auto"
            minRadius={500}
            maxRadius={800}
            overlayBlurColor="#000000"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            openedImageWidth="500px"
            openedImageHeight="500px"
            grayscale={false}
            dragSensitivity={18}
            maxVerticalRotationDeg={8}
            segments={35}
            dragDampening={2}
            hideOverlays={true}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-400 text-sm">
            Drag to explore • Click to enlarge
          </p>
        </div>
      </section>
    </StarsBackground>
  );
}
