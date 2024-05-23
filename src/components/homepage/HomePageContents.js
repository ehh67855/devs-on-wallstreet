import { IMAGES_INFO } from "../../Information";
import ImageCarousel from "../Carousel/ImageCarousel";

export default function HomePageContents({HOME_INFO}) {
    return (
        <div>
          {HOME_INFO.map((info, index) => (
            <div key={index}>
              <h3 className="text-center">{info.title}</h3>
              <p>{info.description}</p>
              {index === 1 && <ImageCarousel IMAGES_INFO={IMAGES_INFO}/>}
            </div>
          ))}
        </div>
      );
    
};