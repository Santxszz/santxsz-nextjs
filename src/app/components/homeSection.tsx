import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOpen, IoSunny } from 'react-icons/io5';
import "../assets/css/style.css"

export default function homeSection() {
    return (
        <>
            <main className="main-content w-screen flex justify-center ">
                <div className="flex items-center gap-10 ">
                    <img className="rounded-full" src="/perfil.jpg" alt="Foto de Perfil - Erek Couto Santos" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold"> Erek Couto Santos </h3>
                        <h6 className="text-sm text-zinc-50/50" id="status"> Dev. Front End </h6>
                    </div> 

                    <a href="#" className='btn-group rounded'> <IoSunny /> </a>

                </div>

             

            </main>

            <div className="informations-section flex flex-col gap-3 bg-zinc-900/50">
                <h6 className='text-zinc-50/50 font-semibold'> Sobre </h6>
                <p  className='text-zinc-50/25 font-thin'>Maluco doido que programa alguma coisa em JS e TS, as vezes usa Python mas não é sempre. Usa java apenas por obrigação.</p>
                <a href="#" className='btn-group-about rounded text-center font-semibold'> Saiba Mais </a>
            </div>

            <div className="projects-section flex flex-col gap-3 bg-zinc-900/50">
                <h6 className='text-zinc-50/50 font-semibold'> Projetos </h6>
                <div className="project-detail rounded">
                    <h6 className='text-zinc-900 font-semibold text-sm'> Software de Gestão de Membros </h6>
                    <p className='text-zinc-800 font-semibold text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, in, alias laudantium accusamus aliquam id vitae neque voluptatibus reiciendis quisquam ipsum quasi voluptates saepe omnis cum explicabo, delectus error dolore?</p>
                </div>
            </div>

        </>
    );
}
