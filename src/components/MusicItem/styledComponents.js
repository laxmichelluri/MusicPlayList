import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div``

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const Genre = styled.p`
     color: : #3b82f6; 
    font-family: "Roboto"; 
    font-size: 18px; 
    font-weight: 500;  
    line-height: 30px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
     color: : #ffffff; 
    font-family: "Roboto"; 
    font-size: 20px; 
    font-weight: bold; 
    margin-right: 50px;
`

export const DeleteButton = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`