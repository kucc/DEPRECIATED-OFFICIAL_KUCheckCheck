import React from "react";
import * as S from "./style";
import NavBar from "../../Common/NavBar";
import allContent from "../rulesContent.json"



function PRulesContainer (){
    return(
        <div>
            <NavBar></NavBar>
            <p style={{fontSize: "23px"}}>공지사항</p>

        <>
            <S.SCollapse 
                defaultActiveKey={['1']}
                expandIconPosition="right"
            >
                <S.SPanel
                    header="21-2 KUCC 회비 및 보증금 납부"
                    key="1"
                >
                    <p>
                        {allContent.content[0].fee}
                    </p>
                </S.SPanel>
                <S.SPanel header="21-2 KUCC 세션 및 스터디 신청 안내" key="2">
                    <p>
                        {allContent.content[1].application}
                    </p>
                </S.SPanel>
                <S.SPanel header="21-2 KUCC 세션 및 스터디 활동 안내" key="3">
                    <p>
                        {allContent.content[2].activity}
                    </p>
                </S.SPanel>
            </S.SCollapse>
        </>
        </div>
    )
}

export default PRulesContainer;