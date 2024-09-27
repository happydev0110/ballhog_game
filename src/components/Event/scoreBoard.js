import React, { useEffect, useRef, useState } from 'react';

import { Logo } from "../../const";
// import { TEAM_LIST } from "../../const";

import CustomModal from "../Modal/modal";

const teamList = [0, 1, 2, 3]

export default function ScoreBoard(props) {
    const { tabStatus, eventId, team1Idx, playList, awayScore, homeScore, time, tableScore, selTblIdx, description, increaseAmt, selTeamIdx, selTextIdx, historyList, sportCategory, player1Name, player2Name, player3Name, player4Name, selectedTeam1s, handlePlayName, handlePlayerTeam1s, primaryColor, secondaryColor, turns } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [teamIdxModal, setTeamIdxModal] = useState(-1);

    useEffect(() => {
        handleTeamShown(selTblIdx)
    }, [])

    const handleTeamShown = (index) => {
        console.log(index, 'teamIndex')
        if (team1Idx != -1) {
            setModalIsOpen(true);
        }
        setTeamIdxModal(index);
    }

    return (
        <>
            {
                !tabStatus && <>
                    {/* Team Section */}
                    {
                        teamList.map((teamIdx, index) => {
                            return (<div className='row pb-3' key={index}>
                                <div className='col-md-12'>
                                    <div className={teamIdx === 0 ? 'mb-4' : ''} style={{ border: teamIdx === 0 ? '5px solid' + primaryColor : '1px solid' + primaryColor }} onClick={() => {
                                        handleTeamShown((selTblIdx + teamIdx) % 4)
                                    }} >
                                        <div className='p-3' style={{ backgroundColor: ((selTblIdx + teamIdx) % 4 == 0) && primaryColor + '30' }}>
                                            <div className='float-left text-center row mb-3' >
                                                <div className='col'>
                                                    <p className='d-inline-block px-2' style={{ backgroundColor: primaryColor, color: 'white', float: 'left', borderRadius: '100%' }}>{selTblIdx != -1 ? (selTblIdx + teamIdx) % 4 + 1 : (selTblIdx + teamIdx) % 4 + 2}</p>
                                                    {(selTblIdx + teamIdx) % 4 == 0 && <p className='d-inline-block'>{player1Name}</p>}
                                                    {(selTblIdx + teamIdx) % 4 == 1 && <p className='d-inline-block'>{player2Name}</p>}
                                                    {(selTblIdx + teamIdx) % 4 == 2 && <p className='d-inline-block'>{player3Name}</p>}
                                                    {(selTblIdx + teamIdx) % 4 == 3 && <p className='d-inline-block'>{player4Name}</p>}
                                                    <p className='d-inline-block' style={{ fontSize: 18, float: 'right', paddingRight: 20, fontWeight: 'bold' }}>{tableScore[(selTblIdx + teamIdx) % 4]}</p>
                                                </div>
                                            </div>
                                            <div className='content'>
                                                {
                                                    ((selTblIdx + teamIdx) % 4 != -1 && teamIdx == 0) && historyList[(selTblIdx + teamIdx) % 4].map((item, index) => {
                                                        return (
                                                            <div key={index} className='pb-2'>
                                                                <div className='d-flex justify-content-between'>
                                                                    <div className='d-inline-flex'>
                                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : Logo[sportCategory]} style={{ width: 30, height: 30 }} />
                                                                        <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}</p>
                                                                    </div>
                                                                    <p className='d-inline-block' style={{ paddingRight: 10, whiteSpace: 'nowrap' }}>
                                                                        {item.increase != 0 ? <b className='text-danger d-inline-block float-right'>{" " + item.increase + " (" + item.score + ") " + item.time}</b> : <b className='text-black' style={{ float: 'right' }}>{" " + item.time}</b>}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    ((selTblIdx + teamIdx) % 4 != -1 && teamIdx == 3) && historyList[(selTblIdx + teamIdx) % 4].map((item, index) => {
                                                        return (
                                                            <>
                                                                <div key={index} className='pb-2'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div className='d-inline-flex'>
                                                                            <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : Logo[sportCategory]} style={{ width: 30, height: 30 }} />
                                                                            <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}
                                                                            </p>
                                                                        </div>
                                                                        <p className='d-inline-block' style={{ paddingRight: 10, whiteSpace: 'nowrap' }}>
                                                                            {item.increase != 0 ? <b className='text-danger d-inline-block float-right'>{" " + item.increase + " (" + item.score + ") " + item.time}</b> : <b className='text-black' style={{ float: 'right' }}>{" " + item.time}</b>}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                    <div className='text-center mt-3 mb-5'>
                        <button className='btn btn-primary text-uppercase px-5 py-2' style={{ backgroundColor: primaryColor, color: secondaryColor }} onClick={() => { }}> Scoring Rules</button>
                    </div>
                    <CustomModal
                        modalIsOpen={modalIsOpen}
                        primaryColor={primaryColor}
                        setModalIsOpen={setModalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                    >
                        <div className='float-left text-center row mb-3' >
                            <div className='col'>
                                {
                                    teamIdxModal == 0 && <input type='text'
                                        value={player1Name}
                                        onChange={(evt) => {
                                            handlePlayName(evt.target.value, 1)
                                        }}
                                        className='border-0'
                                        style={{ width: 120, fontWeight: 'bold', fontSize: 21 }}
                                    />
                                }
                                {

                                    teamIdxModal == 1 && <input type='text'
                                        value={player2Name}
                                        onChange={(evt) => {
                                            handlePlayName(evt.target.value, 2)
                                        }}
                                        className='border-0'
                                        style={{ width: 120, fontWeight: 'bold', fontSize: 21 }}
                                    />
                                }
                                {

                                    teamIdxModal == 2 && <input type='text'
                                        value={player3Name}
                                        onChange={(evt) => {
                                            handlePlayName(evt.target.value, 3)
                                        }}
                                        className='border-0'
                                        style={{ width: 120, fontWeight: 'bold', fontSize: 21 }}
                                    />
                                }
                                {

                                    teamIdxModal == 3 && <input type='text'
                                        value={player4Name}
                                        onChange={(evt) => {
                                            handlePlayName(evt.target.value, 4)
                                        }}
                                        className='border-0'
                                        style={{ width: 120, fontWeight: 'bold', fontSize: 21 }}
                                    />
                                }
                                <p className='d-inline-block' style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15 }}>{tableScore[teamIdxModal]}</p>
                            </div>
                        </div>
                        {
                            teamIdxModal != -1 && historyList[teamIdxModal].map((item, index) => {
                                return (
                                    <div key={index} className='pb-2'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-inline-flex'>
                                                <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : Logo[sportCategory]} style={{ width: 30, height: 30 }} />
                                                <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}</p>
                                            </div>
                                            <p className='d-inline-block' style={{ paddingRight: 10, whiteSpace: 'nowrap' }}>
                                                {item.increase != 0 ? <b className='text-danger d-inline-block float-right'>{" " + item.increase + " (" + item.score + ") " + item.time}</b> : <b className='text-black' style={{ float: 'right' }}>{" " + item.time}</b>}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className='float-left text-center row my-3' >
                                <div className='col'>
                                    {
                                        teamIdxModal != -1 && <h4 className='d-inline-block'>{Math.floor(turns % 4) > teamIdxModal ? (Math.floor(turns / 4)) + 1 : Math.floor(turns / 4)}</h4>
                                    }
                                </div>
                            </div> */}
                    </CustomModal>
                </>
            }
        </>
    )
}