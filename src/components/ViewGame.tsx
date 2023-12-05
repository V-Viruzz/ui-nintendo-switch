import { game } from '../static/game'

function ViewGame () {
  return (
    <div className="flex ">
      <ul
        className="w-full flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-x pl-40 pt-[0.6%] gap-5"
      >
        {game.map(({ name, id, urlImage }) => (
          <li
            className=" grow-0 shrink-0 grid 2xl:grid-rows-[4rem_minmax(50px,_390px)] xl:grid-rows-[4rem_minmax(50px,_340px)] box-border relative group snap-star scroll-ml-5 focus-visible:outline-0 "
            key={id}
            tabIndex={0}
          >
            <div className="">
              <div className='absolute top-0 leading-none left-1/2 transform -translate-x-1/2 w-auto whitespace-nowrap group-focus:opacity-100 opacity-0 transition-all text-center text-[#15bffd] text-[2.5rem]'>
                {name}
              </div>
            </div>
            <div className="flex outline-offset-4 outline-8 outline-[#15bffd] group-focus:outline group-focus:animate-wiggle shadow-Nbutton transition-all duration-100">
              <img
                className="object-cover  w-full h-full"
                src={urlImage} alt="logo" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewGame
