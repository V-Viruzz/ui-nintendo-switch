import { Outlet, useNavigate } from 'react-router-dom'
import SettingIcon from '../../components/icons/SettingIcon'
import OptionList from '../../components/OptionsList'
import { options } from '../../static/settingOptions'
import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'

function Setting () {
  const { controllerButtonB } = useControllerContext()
  const navigate = useNavigate()

  useEffect(() => {
    controllerButtonB('Back', () => {
      navigate('/')
    })
  }, [])

  return (
    <div className="grid grid-rows-[1fr_7.5fr]   grid-cols-[38.3rem_1fr] h-full w-full pt-5">
      <header className="col-span-2 px-12 flex justify-between flex-col">
        <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4'>
          <SettingIcon width={79} height={79} />
          <h2>Configuracion de la consola</h2>
        </div>
        <div className='w-full h-[1px] bg-[#ffffff] shrink-0'/>
      </header>
      <nav className="pl-24 min-h-full  bg-gradient-to-t from-transparent from-5% via-[#323232] via-50% to-transparent to-100%">
        <OptionList options={options} />
      </nav>
      <section className='pr-12 overflow-auto scrollbar-hide '>
        <div className='px-[5.75rem] py-[4.2rem] text-4xl text-[2.1rem] leading-normal'>
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default Setting
