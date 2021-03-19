import {connect} from 'react-redux';
import Tex from '../components/index';
import {inputTex,setOpenForm} from '../actions/index';

const mapStateToProps = state => (
    {
        texContent : state.texContent,
        isOpenForm : state.isOpenForm
    }
)


const mapDispatchToProps = dispatch => (
    {
        inputTex(texContent){
            dispatch(inputTex(texContent))
        },
        setOpenForm(isOpenForm){
            dispatch(setOpenForm(isOpenForm))
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Tex)

