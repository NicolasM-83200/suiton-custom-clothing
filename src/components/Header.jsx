import userIcon from '../assets/icons/user.png';
import cartIcon from '../assets/icons/cart.png';
import menuIcon from '../assets/icons/menu.png';

const Header = () => {
  return (
    <header className='flex z-10 justify-between items-center h-12 md:h-[66px] w-full fixed backdrop-blur'>
      <div className='md:ml-12 ml-6'>
        <h1 className='md:text-3xl text-xl'>SUITON</h1>
      </div>
      <div className='flex h-full items-center'>
        <div className='flex items-center'>
          <img
            className='mr-3 md:mr-6 cursor-pointer'
            src={userIcon}
            width={20}
            height={16}
            alt='user icon'
          />
          <img
            className='mr-3 md:mr-6 cursor-pointer'
            src={cartIcon}
            width={20}
            height={16}
            alt='cart icon'
          />
          <img
            className='mr-3 md:mr-6 cursor-pointer'
            src={menuIcon}
            width={20}
            height={16}
            alt='menu icon'
          />
        </div>
        <div className='h-full w-16 md:w-[114px] bg-gold/80'></div>
      </div>
    </header>
  );
};

export default Header;
