import React from "react";

//選項群組
export default class ButtonGroups extends React.Component {
  state = {
    datas: [],
  };
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }
  //當選擇時
  handleOnSelect(e, index) {
    this.setState({ value: index });
    this.state.onSelect(index);
  }
  //TODO: 依地點選擇預設的選項
  componentDidMount(e) {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value != prevState.value) {
      console.log("更新");
    }
  }

  render() {
    return (
      <>
        {this.state.datas.map((data, i) => {
          return (
            <button
              key={i}
              className={i == this.state.value ? "button-selected" : "button"}
              onClick={(e) => this.handleOnSelect(e, i)}
            >
              {data.name}
            </button>
          );
        })}
      </>
    );
  }
}
ButtonGroups.defaultProps = {
  datas: [
    {
      //第一組
      latitude: 24.139222576886265,
      longitude: 120.66989999746198,
      start_name: "植生過濾帶",
      end_opts: [
        {
          latitude: 24.144219484967394,
          longitude: 120.67755034164044,
          name: "LID低衝擊開發示範段",
          mid_text: "中間介紹",
        },
        {
          latitude: 24.14136905597838,
          longitude: 120.67349412629767,
          name: "林之助紀念廣場",
          mid_text: "中間介紹",
        },
        {
          latitude: 24.139588385937042,
          longitude: 120.6699209551333,
          name: "荒野教室",
          mid_text: "中間介紹",
        },
      ],
    },
    //第二組
    {
      latitude: 24.139148739601495,
      longitude: 120.6705154262977,
      start_name: "柳川LID簡介",
      end_opts: [
        {
          latitude: 24.144219484967394,
          longitude: 120.67755034164044,
          name: "LID低衝擊開發示範段",
          mid_text: "中間介紹",
        },
        {
          latitude: 24.14136905597838,
          longitude: 120.67349412629767,
          name: "林之助紀念廣場",
          mid_text: "中間介紹",
        },
        {
          latitude: 24.139588385937042,
          longitude: 120.6699209551333,
          name: "荒野教室",
          mid_text: "中間介紹",
        },
      ],
    },
  ],

  //預設選項
  value: 0,

  //選擇事件
  onSelect: (i) => {
    console.log("HI");
  },
};
