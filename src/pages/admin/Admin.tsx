import { useEffect, useState } from 'react';
import s from './Admin.module.scss';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [val, setVal] = useState(1);

  const handleBlure = (e: any) => {
    setVal(parseFloat(e.target.value).toFixed(2));
  };

  useEffect(() => {
    localStorage.setItem('balance', val.toString());
  }, [val])

  const getVisRounds = (e: any) => {
    let arr = e.target.value.replaceAll('\n', '').split('x');
    arr.splice(arr.length-1, 1);
    localStorage.setItem('vis_rounds', JSON.stringify(arr));
  };

  const getNextRounds = (e: any) => {
    let arr = e.target.value.replaceAll('\n', '').split('x').reverse();
    arr.splice(0, 1);
    console.log(arr);
    localStorage.setItem('next_rounds', JSON.stringify(arr));
  };

  return (
    <main className={s.admin}>
      <form className={s.form}>
        <input value={val} onBlur={handleBlure} onInput={e => setVal(e.target.value)} inputMode='decimal' type='text' placeholder='Ваш счёт' />
        <textarea onInput={getVisRounds} cols={30} rows={5} placeholder='Видимые раунды'></textarea>
        <textarea onInput={getNextRounds} cols={30} rows={5} placeholder='Последующие раунды'></textarea>
        <Link to={'/'}>Добавить</Link>
      </form>
    </main>
  );
};

export default Admin;
