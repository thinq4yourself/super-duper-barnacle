import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromEntities, fromIdea, fromStatus } from 'store/selectors'
import { ideaListReadRequest, IDEA_LIST_READ } from 'store/actions'

import { IdeaList } from 'components'

class IdeaListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    const { list, loading } = this.props
    return <IdeaList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromEntities.getList(state, 'idea', fromIdea.getList(state)),
  loading: fromStatus.isLoading(state, IDEA_LIST_READ),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(ideaListReadRequest({ _limit: limit })),
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer)
