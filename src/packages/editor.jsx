import { computed, defineComponent, inject, ref } from "vue";
import "./editorcss.scss";
import EditorBlock from './editor-block'
export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  setup(props) {
    const data = computed({
      get() {
        return props.modelValue;
      },
    });

    const containerStyles = computed(() => ({
      width: data.value.container.width + "px",
      height: data.value.container.height + "px",
    }));

    console.log(data.value);
    // console.log(props.data);
    // console.log(containerStyles);
    return () => (
      <div div class="editor">
        <div class="editor-left">左侧物料栏</div>
        <div class="editor-top">菜单栏</div>
        <div class="editor-right">属性控制栏</div>
        <div class="editor-container">
          {/*负责产生滚动条*/}
          <div class="editor-container-canvas">
            {/*产生内容区域 */}
            <div
              class="editor-container-canvas-content"
              style={containerStyles.value}
            >
              {(data.value.blocks.map(block => (
                <EditorBlock block={block}></EditorBlock>
              )))}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
