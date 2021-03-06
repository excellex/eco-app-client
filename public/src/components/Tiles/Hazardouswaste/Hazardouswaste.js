import React from "react";
import style from "../../Text.module.css";
import FindAdress from "../../FindAdress";

function Hazardouswaste() {
  const props = { category: "КАТЕГОРИЯ", material: "hazardouswaste" };
  return (
    <div>
      <FindAdress props={props} />
      <div className={style.text}>
        <p>
          I класс – чрезвычайно опасные отходы Растиражированные в
          художественных фильмах и прессе знаки радиационной и биологической
          опасности – из этого класса. Но в повседневной жизни чаще встречается
          другой источник таких отходов: ртутьсодержащие градусники и лампы. Они
          ни в коем случае не должны попадать на свалку. «Жидкий» металл крайне
          токсичен, его попадание в живой организм даже в самых малых дозах
          способно нанести огромный вред здоровью, вплоть до гибели. Утилизацией
          занимаются специализированные организации. II класс – высокоопасные
          отходы В отличие от ртути, эти отходы мгновенно не убивают. Их вред
          ощутим в перспективе. Даже после ликвидации источника загрязнения
          экологическая система восстановится не раньше, чем через 30 лет. Самые
          распространенные отходы – отработавшие своё элементы питания:
          батарейки, аккумуляторы и их составляющие. «Моментально ощутимого
          вреда от батареек нет, многие относятся к вопросу их утилизации
          беспечно и выбрасывают все вместе с другими отходами в контейнер для
          ТКО. В последние годы ситуация меняется к лучшему. Растет количество
          пунктов сбора, организаций, занимающихся их утилизацией», — отметил
          исполнительный директор ООО «Компания «РИФЕЙ» Федор Потапов. III класс
          – умеренно опасные отходы Существенный, но поправимый вред наносят
          окружающей среде моторные масла и загрязненные ими фильтры
          автомобилей. Они, как и промышленные отходы переработки
          нефтепродуктов, делают непригодной для жизни окружающую среду на 10
          лет. Больший урон природе наносят нелегальные предприятия или
          автовладельцы, самостоятельно обслуживающие автомобиль, не обращаясь
          за утилизацией к специализированным предприятиям. IV класс –
          малоопасные отходы В этот класс частично попадает мусор, относящийся к
          ТКО, с которым работает региональный оператор. Малоопасные отходы не
          требуют особых условий транспортировки и нейтрализации, но могут
          нанести вред экосистеме. Сюда входят: автомобильные покрышки,
          макулатура, строительный мусор. V класс – практически неопасные отходы
          Подавляющее большинство этого мусора – профиль деятельности
          регоператора. Сюда внесены все виды отходов, образующиеся в быту. Они
          практически не наносят вреда окружающей среде, если вывозятся и
          утилизируются подобающим образом. Опасность представляют стихийные,
          неконтролируемые свалки. В больших объемах и без надлежащих условий
          захоронения или переработки такой мусор способен стать причиной
          нанесения природе непоправимого ущерба. Именно последние два класса,
          несмотря на их наименование, представляют сегодня наибольшую угрозу
          экологической ситуации. Поэтому одна из функций регионального
          оператора — взять под контроль и сформировать современные подходы к
          утилизации ТКО в рамках национального проекта «Экология». При этом не
          менее важен осознанный подход граждан к вопросу утилизации мусора,
          вместо складирования в один контейнер батареек, строительного мусора и
          пищевых отходов. Справка: основной перечень классов опасности отходов
          зафиксирован в ст. 4.1. федерального закона №89-ФЗ «Об отходах
          производства и потребления». Актуальный список отходов содержится в
          Федеральном Классификационном Каталоге Отходов.
        </p>
      </div>
    </div>
  );
}

export default Hazardouswaste;
