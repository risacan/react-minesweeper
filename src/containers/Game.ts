import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { State } from '../store/reducer'
import { Actions } from '../modules/game/gameAction'

import { Game as GameComponent } from '../components/Game'

interface StateProps {
  game: State['game']
}

interface DispatchProps {
  handleClickCell: () => void
}

export type GameProps = StateProps & DispatchProps

const mapStateToProps = (state: State): StateProps => ({
  game: state.game,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>): DispatchProps => ({
  handleClickCell: () => {
    console.log('click cell')
    console.log(dispatch)
  },
})

export const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameComponent)
