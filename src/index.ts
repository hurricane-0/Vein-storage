/**
 * VEIN storage contracts
 * This package defines the public data shape for VEIN product storage.
 */

export const STORAGE_CONTRACT_VERSION = '1.0.0';

export type BlockType = 'link' | 'markdown' | 'image';
export type RilStatus = 'unread' | 'later' | 'important' | 'done';

export type CollectionNodeType = 'folder' | 'block';
export interface CollectionNodeBase {
  id: string;
  type: CollectionNodeType;
  parent_id?: string;
  title: string;
  block_type?: BlockType;
  content_markdown?: string;
  excerpt?: string;
  source_url?: string;
  source_title?: string;
  asset_key?: string;
  asset_mime?: string;
  asset_size?: number;
  tag_ids?: string[];
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface CollectionFolderRecord extends CollectionNodeBase {
  type: 'folder';
}

export interface CollectionBlockRecord extends CollectionNodeBase {
  type: 'block';
  parent_id: string;
  block_type: BlockType;
}

export type CollectionNodeRecord = CollectionFolderRecord | CollectionBlockRecord;

export interface CollectionItemRecord {
  id?: number;
  collection_id: string;
  block_id: string;
  sort_order: number;
  created_at: string;
}

export interface BlockTagRecord {
  id?: number;
  block_id: string;
  tag_id: string;
}

export interface TagRecord {
  id: string;
  name: string;
  name_norm: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface RilItemRecord {
  id: string;
  type: BlockType;
  title: string;
  content_markdown?: string;
  excerpt?: string;
  source_url?: string;
  source_title?: string;
  asset_key?: string;
  asset_mime?: string;
  asset_size?: number;
  status: RilStatus;
  priority: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export type CanvasNodeType = 'block' | 'text' | 'shape' | 'stroke';

export interface CanvasNodeBase {
  id: string;
  node_type: CanvasNodeType;
  canvas_block_id?: string;
  position_x: number;
  position_y: number;
  width: number;
  height: number;
  rotation: number;
  z_index: number;
  created_at: string;
  updated_at: string;
}

export interface BlockNodeData {
  canvas_block_id: string;
  display_mode: 'thumbnail' | 'preview' | 'card';
  title: string;
  source?: string;
  source_url?: string;
  color?: string;
  content?: string;
}

export interface TextNodeData {
  content: string;
  font_size: number;
  font_family: string;
  text_color: string;
  bg_color: string;
  bg_opacity: number;
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface ShapeNodeData {
  shape_type: 'rect' | 'circle' | 'arrow' | 'line';
  fill_color?: string;
  stroke_color: string;
  stroke_width: number;
  stroke_type: 'solid' | 'dashed';
}

export interface StrokeNodeData {
  stroke_type: 'pen';
  color: string;
  width: number;
  points: Array<{
    x: number;
    y: number;
    pressure?: number;
  }>;
}

export interface CanvasBlockRecord {
  id: string;
  canvas_id: string;
  type: BlockType;
  title: string;
  content_markdown?: string;
  excerpt?: string;
  source_url?: string;
  source_title?: string;
  asset_key?: string;
  asset_mime?: string;
  asset_size?: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  color?: string;
  position_x?: number;
  position_y?: number;
  width?: number;
  height?: number;
  rotation?: number;
  z_index?: number;
  display_mode?: 'thumbnail' | 'preview' | 'card';
  source?: string;
}

export interface CanvasRecord {
  id: string;
  user_id?: string;
  title: string;
  description?: string;
  settings?: Record<string, unknown>;
  nodes: CanvasNodeRecord[];
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface CanvasNodeRecord extends CanvasNodeBase {
  data_json: BlockNodeData | TextNodeData | ShapeNodeData | StrokeNodeData;
}

export interface SyncMetaRecord {
  key: string;
  value: unknown;
}

export interface StorageContractTables {
  collectionFolders: CollectionFolderRecord;
  collectionBlocks: CollectionBlockRecord;
  collectionItems: CollectionItemRecord;
  blockTags: BlockTagRecord;
  canvases: CanvasRecord;
  canvasBlocks: CanvasBlockRecord;
  rilItems: RilItemRecord;
  tags: TagRecord;
  syncMeta: SyncMetaRecord;
}

