import {connect} from 'react-redux';
import Tex from '../components/index';
import {inputTex} from '../actions/index';

const mapStateToProps = state => (
    {
        texContent : state.texContent
    }
)


const mapDispatchToProps = dispatch => (
    {
        inputTex(texContent){
            dispatch(inputTex(texContent))
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Tex)

