import React from "react";
import FindAdress from "../../FindAdress";
import style from "../../Text.module.css";

function Flakon() {
  const props = { category: "КАТЕГОРИЯ", material: "ПЛАСТИК" };

  return (
    <div>
      <FindAdress props={props} />
      <br />
      <div className={style.text}>
        <p>
          Вот как действует пластик на различные сферы: большая часть
          пластмассовых изделий складируется на свалках, там собраны самые
          разные виды материалов, и некоторые из них могут быть довольно
          опасными. Например, хлорированный пластик способен выделять химические
          вещества, которые уходят в почву, попадают в подземную воду, а затем и
          в скважины, из которых берут воду для питья. Биоразлагаемый пластик
          выделяет метан, этот газ попадает в атмосферу и способствует созданию
          парникового эффекта, что ускоряет глобальное потепление; огромное
          количество пластика находится в водах океанов, и во время разложения
          материал также выделяет токсичные вещества. Кроме того, с приливом
          часть мусора выбрасывается на берег, загрязняя пляжи. В воде
          собираются настоящие мусорные пятна, которые достаточно сложно убрать;
          негативное воздействие пластик оказывает и на животных. Вредные
          вещества могут попадать в их организм и отравлять. Огромное количество
          морских обитателей погибает из-за пластика. Рыбы, киты и черепахи
          умирают от отравления, либо запутавшись в мусоре. Это же касается и
          морских птиц. Если животные случайно проглатывают пластик, их
          пищеварительный тракт забивается, и они умирают от голода, поскольку
          больше не могут питаться; пластик вреден и для человека, химические
          вещества некоторых токсичных пластмасс могут вызывать кожные
          заболевания и отравления. Пластмассы влияют на все живое, поэтому в
          мире стараются решить эту проблему, занимаясь переработкой мусора,
          очищая океан и разрабатывая программы, направленные на защиту
          окружающей среды.
        </p>
      </div>
    </div>
  );
}

export default Flakon;
