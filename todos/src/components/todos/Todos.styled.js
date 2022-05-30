import styled from 'styled-components'

const Styled = styled.div`

.todo-list{
    width:700px;
  
}
ul{
    list-style-type:none;
}
li{
    margin-top:5px
}

.btn{
    margin-left: 10px;
    width: 50px;
    height: 20px;
    color: white;
    background-color: #5393ff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.btnadd{
    margin-left: 5px;
    width: 70px;
    height: 45px;
    color: white;
    background-color: #5393ff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
input{
    width:30%
}
select{
    width:15%
}
`

export default Styled