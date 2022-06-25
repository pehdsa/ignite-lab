
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {

    const { slug: currentSlug } =  useParams<{ slug: string }>();

    const isLessonAvailable = isPast(availableAt)
    const availableDateFormated = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'MM", { locale: ptBR })

    const isActiveLesson = currentSlug === slug

    return (
        <Link to={ isLessonAvailable ? `/event/lesson/${ slug }` : '' } className="group">
            <span className="block text-base text-gray-300">
                { availableDateFormated }
            </span>
            
            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-all ${ isActiveLesson ? 'bg-green-500' : '' }`}>
                <header className="flex items-center justify-between">
                    
                    { isLessonAvailable ? (
                        <span className={`flex items-center gap-2 text-sm  font-medium ${ isActiveLesson ? 'text-white' : 'text-blue-500' }`}>
                            <CheckCircle size={ 20 } />
                            Conteúdo liberado
                        </span> 
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={ 20 } />
                            Em breve
                        </span>
                    ) }
                   
                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white border font-bold ${ isActiveLesson ? 'border-white' : 'border-green-300' }`}>
                        { type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </span>
                </header>
                <strong className={ `block mt-5 ${ isActiveLesson ? 'text-white' : 'text-gray-200' }` }>
                    { title }
                </strong>
            </div>
        </Link>
    )
}