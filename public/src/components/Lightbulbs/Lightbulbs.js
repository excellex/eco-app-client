import React from 'react';
import FindAdress from '../FindAdress';
import style from '../Text.module.css'

function Lightbulbs() {
  const props = { category: 'КАТЕГОРИЯ', material: 'lightbulbs' };

  return (
    <div>
      <FindAdress props={props} />
      <br />
      <div className={style.text}>
        <p5>Лампы накаливания
        Обычные лампы накаливания используются сейчас в основном в быту. По своей опасности в качестве отходов они относятся к V классу.

        Это значит — спокойно можно выбрасывать в мусорное ведро, не заботясь о последствиях. При раздельном сборе мусора следует иметь в виду, что стекло, используемое в лампах, по своим свойствам отличается от обычного и не может быть переработано совместно с другими сортами стекла. Поэтому лучше лампу накаливания выбрасывать не в контейнер для стекла, а в контейнер для несортируемых отходов.

        А вот с галогенными лампами накаливания ситуация совсем иная. В их колбе содержится газ, обеспечивающий вольфрамово-галогенный цикл. Он менее вреден, чем ртуть, тем не менее может оказывать негативное действие на окружающую среду. Поэтому в 2018 г. в ФККО внесли изменение, отнеся галогенные лампы накаливания к III классу опасности. Это значит, что такие лампы после того, как они выработают свой ресурс, теперь нужно сдавать в специализированные организации, занимающиеся их утилизацией.

        Ртутьсодержащие лампы
Основным документом, регулирующим вопросы утилизации ртутьсодержащих ламп в России, являются «Правила обращения с отходами производства и потребления в части осветительных устройств, электрических ламп, ненадлежащие сбор, накопление, использование, обезвреживание, транспортирование и размещение которых может повлечь причинение вреда жизни, здоровью граждан, вреда животным, растениям и окружающей среде». Они были утверждены постановлением Правительства РФ от 03.09.2010 г. № 681 с изменениями и дополнениями от 01.10.2013 г. Ртутьсодержащие лампы нельзя выбрасывать вместе с другим мусором, их надо сдавать в специальные пункты приема либо складировать в контейнеры для сбора ламп, устанавливаемые в жилых домах, муниципалитетах, офисах управляющих компаний и т. п. местах. Размещение таких контейнеров согласовывается с органами местного самоуправления. Категорически запрещено складировать отработанные лампы в местах, относящихся к общедомовой собственности многоквартирного дома, если это не пункты сбора, разрешенные местными властями. Потребителям дозволено самостоятельно транспортировать отработавшие ртутьсодержащие лампы только до точки сбора такого рода отходов. При этом лампа должна быть упакована в коробку от лампы такого же размера либо в иную тару, обеспечивающую ее сохранность.</p5>
      </div>
    </div>
  );
}

export default Lightbulbs;
