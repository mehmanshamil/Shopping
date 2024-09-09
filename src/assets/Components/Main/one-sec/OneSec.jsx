import { GrNext } from "react-icons/gr";

const OneSec = () => {
  const menuData = [
    "Məktəb ləvazimatları",
    "Hovuz məhsulları",
    "Park atraksionları",
    "Oyuncaqlar",
    "Oyunlar",
    "Nəqliyyat vasitələri",
    "Evciklər və çadırlar",
    "Ana və Uşaq",
    "Elektronika",
    "İdman məhsulları",
    "Hobbi və yaradıcılıq",
    "Orijinal məhsullar",
    "Bəzək əşyaları",
    "Yumşaq oyuncaqlar",
    "Digər oyuncaqlar",
    "Hədiyyə kartları",
  ];

  return (
    <section >
      <div className=" flex justify-center">
        <div className="menu flex w-11/12">
          <ul className=" w-2/12 ">
            {menuData &&
              menuData.map((item, index) => (
                <li
                  className="cursor-pointer flex items-center justify-between my-1.5"
                  key={index}>
                  {item} <GrNext />
                </li>
              ))}
          </ul>
          <div className="carousel">
              <span>Carousel</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates commodi vel et nemo veritatis optio. Explicabo magni similique ex, assumenda error numquam, at optio voluptatum velit quas, nesciunt alias hic.</p>
              <div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, velit harum. Beatae fuga fugiat magni accusamus blanditiis eligendi voluptas eius impedit, earum dolorem vel perspiciatis rerum facilis qui aliquid! Eligendi!
                </div>

                <div>
                  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veritatis exercitationem natus, modi eaque pariatur nobis quibusdam ab rerum quia, corrupti dignissimos. Iusto tempora temporibus laborum, illo vitae facilis suscipit.</span>
                </div>
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam officiis veritatis asperiores, inventore dolorem totam. Veniam molestias ea blanditiis id? Iure provident illum excepturi beatae fugit debitis necessitatibus quo dignissimos.
                </span>
                <span>Lorem</span>
              </div>
              <ul>
                <li><a href="">item1</a></li>
              </ul>*10
          </div>
        </div>
      </div>

    </section>
  );
};

export default OneSec;
