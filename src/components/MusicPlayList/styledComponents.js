import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1` 
     color: : #ffffff; 
    font-family: "Roboto"; 
    font-size: 42px; 
    font-weight: bold;
`

export const ArtistInfo = styled.p`
    color: : #ffffff; 
    font-family: "Roboto"; 
    font-size: 32px; 
    font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
    color: : #ffffff; 
    font-family: "Roboto"; 
    font-size: 32px; 
    font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  color: #cbd5e1;
  background-color: transparent;
  padding-left: 15px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
     color: : #ffffff; 
    font-family: "Roboto"; 
    font-size: 32px; 
    font-weight: bold;
`