 import { useEffect, useState } from 'react'
import { PostInterface } from '../../interfaces/Post'
import './styles.css'

 export function Posts(){

  const [posts, setPosts] = useState<PostInterface[]>([])

  

  async function fetchPosts(){ 
    try{
      const response = await fetch('https://portfolio-post-notion.herokuapp.com/database')
    
      const post = await response.json()

      setPosts(post.results)
    }
    catch(erro){
      console.log(erro, 'Não foi possível carregar os posts')
    }
  }

  function getPublishedDate(time: string){
    const date = new Date(time)
    String(date.getDate())
    const day = String(date.getDate())
    const month = date.getMonth() + 1 >= 10 ? String(date.getMonth()+ 1) : 0 + String(date.getMonth()+1)
    const year = String(date.getFullYear())

    return `${day + '/' + month + '/' + year}`
  }

  function getTitle(title: string, id: string){
    const newId = id.replaceAll('-', '')
    const newTitle = title.substring(22).replaceAll('-', ' ').replace(`${newId}`, '')
    
    return newTitle
  }
 
  useEffect(() => {
    fetchPosts()
  }, []) 

   
  if(!posts) {
  
    return <div>
      Nenhum post disponível
    </div>
  }

  return (
    <section className="posts section" id='posts'>
      <div className="container">
        <div className="posts-info">    
        <h3 className="sub-heading">Meus Posts</h3>   
        <h1 className="heading">O que ando postando</h1>   
        </div>

        <div className="posts-grid">
          {posts.map(post => <a href={post.url} target='_blank' className="post-card">
            <div className="card-desc">
              <h3>{getTitle(post.url, post.id)}</h3>
              <p className="text">{getPublishedDate(post.created_time)}</p>
            </div>
           
          </a>)}          
        </div>
        <a href="#" className="btn secondary-btn">Veja todos</a>
      </div>
    </section>
  )
 }