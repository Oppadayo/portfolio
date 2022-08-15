import { Folder, GitFork, Star } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { PostInterface } from '../../interfaces/Post'
import { RepoInterface } from '../../interfaces/Repo'
import { Card } from '../Card'
import './styles.css'

export function Posts() {
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
  
  if(!posts) {
  
    return <Card>
      Nenhum post disponível
    </Card>
  }
  useEffect(() => {
    fetchPosts()
  }, []) 

  return (
    <>
      <Card>
        <div className='posts-header'>
          <h3>Posts</h3>
          <a href="https://www.notion.so/Blog-d946e5a4c272481ba1470cbe88f63d12">Veja todos</a>
        </div>
      </Card>
     
      {posts.map((post, key) => (  
        <Card key={key}>
        <a href={post.url}>        
          <div className='head'>            
            <h3>{getTitle(post.url, post.id)}</h3>
            <p>{getPublishedDate(post.created_time)}</p>
          </div>
          <footer className='post-footer'>              
            <small></small>              
          </footer>
          </a>    
        </Card>)
        )}
      
    </>
  )
}


