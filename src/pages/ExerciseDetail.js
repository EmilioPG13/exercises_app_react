import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({second})
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about'
    
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail