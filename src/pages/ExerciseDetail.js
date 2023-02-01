import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [ExerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about'
    
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData);

      const ExerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?q=${exerciseDetail.name}`, youtubeOptions)
      setExerciseVideos(ExerciseVideosData)
    }
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos ExerciseVideos={ExerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail