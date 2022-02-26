import React, {useState} from 'react';
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperEditableSpan from "../common/SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../common/SuperSelect/SuperSelect";
import SuperRadio from "../common/SuperRadio/SuperRadio";


const Demo = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div>
      <SuperInputText placeholder={'Ваше имя...'}/>
      <SuperCheckbox>Принимаю условия</SuperCheckbox>
      <SuperButton>Тестовая кнопка</SuperButton>
      <div>
        <SuperEditableSpan value={value}
                           onChangeText={setValue}
                           spanProps={{children: value ? undefined : 'enter text...'}}/>
      </div>
      <div>
        <SuperSelect
          options={['Monday', 'Wednesday', 'Friday']}

        />
      </div>
      <div>
        <SuperRadio
          name={'radio'}
          options={['Monday', 'Wednesday', 'Friday']}
          value={'Monday'}
        />
      </div>
    </div>
  );
};

export default Demo;