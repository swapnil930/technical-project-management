import { useState } from "react";
import DescriptionBox from "./DescriptionBox";
import { Icon } from "@iconify/react";



const AssetContainer = ({ asset }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsedThread, setIsCollapsedThread] = useState(true)

  const toggleThreadIntro = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleThread = () => {
    setIsCollapsedThread(!isCollapsedThread);
  };

  const renderAssetContent = () => {
    if (asset.asset_content_type === 'video' && asset.asset_content) {
      return (
        <div className="asset-video">
          <iframe
            width="100%"
            height="315"
            src={asset.asset_content}
            title={asset.asset_title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    if (asset.asset_content_type === 'article' && asset.asset_content) {
      return (
        <div className="asset-article">
          <a href={asset.asset_content} target="_blank" rel="noopener noreferrer">
          </a>
          <div className="asset-article-header" onClick={toggleThreadIntro}>
            <button
              className={`collapse-btn ${isCollapsed ? 'collapsed' : ''}`}
              aria-expanded={!isCollapsed}
              aria-label="Toggle"
            >
              <Icon icon="fa-solid:angle-down" className="arrow-icon" width="20" height="20" />
            </button>
            <span className="asset-article-title">Introduction</span>
          </div>
          {isCollapsed && (
            <>
              <div className="asset-article-desc">
                <p>The 4SA Method , How to bring a idea into progress ?</p>
                <p className="seemore">see more</p>
              </div>
            </>
          )}
          <div className="asset-article-header" onClick={toggleThread}>
            <button
              className={`collapse-btn ${isCollapsedThread ? 'collapsed' : ''}`}
              aria-expanded={!isCollapsedThread}
              aria-label="Toggle"
            >
              <Icon icon="fa-solid:angle-down" className="arrow-icon" width="20" height="20" />
            </button>
            <span className="asset-article-title">Introduction</span>
          </div>


          {isCollapsedThread && (
            <>
              <div className="asset-article-desc">
                <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                <p className="seemore">see more</p>
              </div>
            </>
          )}
          <div className="asset-article-thread">
            <div>
              <span className="asset-article-title">Example 1</span>
            </div>
          </div>
          <div className="asset-article-desc">
            <p>You have a concept , How will you put into progress?</p>
          </div>
        </div>
      );
    }

    if (asset.asset_content_type === 'threadbuilder') {
      return (
        <>
          <div className="thread-header" onClick={toggleThread}>
            <button className={`collapse-btn ${!isCollapsedThread ? 'collapsed' : ''}`} aria-expanded={!isCollapsedThread}
              aria-label="Toggle">
              <Icon icon="fa-solid:angle-down" className="arrow-icon" width="20" height="20" />
            </button>
            <span className="thread-title">Thread A</span>
          </div>

          {isCollapsedThread && (
            <>
              <div className="thread-container">

                <div className="subthread-grid">
                  <div className="wrap-input-group">
                    <div className="title-bg">
                      <label className="input-label">Sub thread 1</label>
                    </div>
                    <div className="textarea-bg">
                      <textarea className="text-input" placeholder="Enter Text here"></textarea>
                    </div>
                  </div>

                  <div className="wrap-input-group">
                    <div className="title-bg">
                      <label className="input-label">Sub Interpretation 1</label>
                    </div>
                    <div className="textarea-bg">
                      <textarea className="text-input" placeholder="Enter Text here"></textarea>
                    </div>
                  </div>
                </div>

                <div className="action-row">
                  <div className="icon-btn-wrap">
                    <Icon className="icon-btn" title="Ideas" icon="bxs:bulb" width="20" height="20" />
                    <Icon className="icon-btn" title="Comments" icon="material-symbols:comment" width="20" height="20" />
                    <Icon className="icon-btn" title="Help" icon="solar:question-square-bold" width="20" height="20" />
                    <Icon className="icon-btn" title="flower" icon="mdi:flower-tulip" width="20" height="20" />
                  </div>
                  <div className="spacer"></div>
                  <select className="select-dropdown">
                    <option value="">Select Categ</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>

                  <select className="select-dropdown">
                    <option value="">Select Proces</option>
                    <option value="process1">Process 1</option>
                    <option value="process2">Process 2</option>
                    <option value="process3">Process 3</option>
                  </select>
                </div>

                <button className="add-subthread-btn">+ Sub-thread</button>

                <div className="wrap-summary-group">
                  <div className="summary-title-bg">
                    <label className="summary-input-label">Sub thread 1</label>
                  </div>
                  <div className="summary-textarea-bg">
                    <textarea className="summary-text-input" placeholder="Enter Text here"></textarea>
                  </div>
                </div>

              </div>
            </>
          )}
        </>

      );
    }

    if (asset.asset_content_type === 'article' && !asset.asset_content) {
      return (
        <div className="asset-article-editor">
          <label className='article-label' htmlFor="title">Title</label>
          <input type="text" className="article-title" />
          <label className='article-label' htmlFor="content">Content</label>
          <div className="article-editor">
            <div className="editor-toolbar">
              <div className="toolbar-menu">
                <a href="#" onClick={(e) => e.preventDefault()}>File</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Edit</a>
                <a href="#" onClick={(e) => e.preventDefault()}>View</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Insert</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Format</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Tools</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Table</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Help</a>
              </div>
              <div className="editor-content">
                <div className="editor-format-bar">
                  <button title="Undo"><Icon icon="ooui:undo-ltr" width="20" height="20" /></button>
                  <button title="Redo"><Icon icon="ooui:redo-ltr" width="20" height="20" /></button>
                  <button title="Fullscreen"><Icon icon="ion:expand-sharp" width="20" height="20" /></button>
                  <select className="paragraph-select">
                    <option>Paragraph</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                  </select>
                  <button title="More"><Icon icon="iconoir:more-horiz" width="24" height="24" /></button>
                </div>

              </div>
            </div>


          </div>
          <textarea rows="10"></textarea>
        </div>

      );
    }

    return null;
  };

  return (
    <div className="asset-container">
      <div className="asset-header">
        <p>{asset.asset_title}</p>
        <Icon icon="material-symbols:info" width="24" height="24" />
      </div>

      <DescriptionBox description={asset.asset_description} />

      <div className="asset-content">
        {renderAssetContent()}
      </div>
    </div>
  );
}; export default AssetContainer;