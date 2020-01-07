
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      

      
      declare namespace defs {
      
        export class ChangeKnowledgeDto {
      
      /** 知识点详情 */
      detail: string;

      /** 关键字（多个关键字用,隔开） */
      keywords: string;

      /** 知识分类ID */
      knowledgeTypeId: number;

      /** 知识点概述 */
      summary: string;

      /** 知识点标题 */
      title: string;

      /** 更新用户的ID */
      updatedBy: string;

      /** 知识点提醒点 */
      warning: string;
    }
    
      

        export class ChangeKnowledgeTypeDto {
      
      /** 分类描述 */
      description?: string;

      /** 父ID */
      parentId?: number;

      /** 分类名称 */
      typeName: string;

      /** 创建人ID */
      updatedBy: string;
    }
    
      

        export class ChangeUserInfoDto {
      
      /** email */
      email: string;

      /** password */
      password: string;

      /** role */
      role: 'root' | 'admin' | 'guest';

      /** username */
      username: string;
    }
    
      

        export class CreateKnowledgeDto {
      
      /** 创建用户的ID */
      createdBy: string;

      /** 知识点详情 */
      detail: string;

      /** 关键字（多个关键字用,隔开） */
      keywords: string;

      /** 知识分类ID */
      knowledgeTypeId: number;

      /** 知识点概述 */
      summary: string;

      /** 知识点标题 */
      title: string;

      /** 知识点提醒点 */
      warning: string;
    }
    
      

        export class CreateKnowledgeTypeDto {
      
      /** createdBy */
      createdBy: string;

      /** 分类描述 */
      description?: string;

      /** parentId */
      parentId?: number;

      /** 分类名称 */
      typeName: string;
    }
    
      

        export class Date {
      
    }
    
      

        export class DeleteSuccessRes {
      
      /** 返回码，0: 成功；1: 失败 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** true: 操作成功；false: 操作失败 */
      payload: boolean;
    }
    
      

        export class ErrorRes {
      
      /** 返回码，0: 成功 1: 失败 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为fail） */
      message: string;

      /** 返回的错误信息，为字符串时为错误描述；为数组或对象时为错误详情 */
      payload: object;

      /** 请求的URL路径 */
      url: string;
    }
    
      

        export class KnowledgeEntity {
      
      /** 创建用户的ID */
      createdBy: string;

      /** createdTime */
      createdTime: any;

      /** 知识点详情 */
      detail: string;

      /** 知识点ID */
      id: number;

      /** 关键字列表，多个关键字之间用英文逗号隔开 */
      keywords: string;

      /** 知识点分类ID */
      knowledgeTypeId: number;

      /** 知识点概述 */
      summary: string;

      /** 知识点标题 */
      title: string;

      /** 最后更新用户的ID */
      updatedBy: string;

      /** updatedTime */
      updatedTime: any;

      /** 易错点提醒 */
      warning: string;
    }
    
      

        export class KnowledgeTypeChildrenClass {
      
      /** children */
      children: Array<defs.KnowledgeTypeEntity>;

      /** 创建用户的ID */
      createdBy: string;

      /** createdTime */
      createdTime: any;

      /** 分类描述 */
      description: string;

      /** 知识类ID */
      id: number;

      /** 父ID，根节点父节点ID为-1 */
      parentId: number;

      /** 类型树路径，用/隔开 */
      path: string;

      /** 知识类名 */
      typeName: string;

      /** 更新用户的ID */
      updatedBy: string;

      /** updatedTime */
      updatedTime: any;
    }
    
      

        export class KnowledgeTypeEntity {
      
      /** 创建用户的ID */
      createdBy: string;

      /** createdTime */
      createdTime: any;

      /** 分类描述 */
      description: string;

      /** 知识类ID */
      id: number;

      /** 父ID，根节点父节点ID为-1 */
      parentId: number;

      /** 类型树路径，用/隔开 */
      path: string;

      /** 知识类名 */
      typeName: string;

      /** 更新用户的ID */
      updatedBy: string;

      /** updatedTime */
      updatedTime: any;
    }
    
      

        export class LoginByEmailDto {
      
      /** email */
      email: string;

      /** password */
      password: string;
    }
    
      

        export class LoginByUsernameDto {
      
      /** password */
      password: string;

      /** username */
      username: string;
    }
    
      

        export class LoginUserClass {
      
      /** 登录token值，需要在请求头中带有该token */
      accessToken: string;

      /** 用户邮箱 */
      email: string;

      /** 用户邮箱是否已经被验证：true：已经被验证，false:还没被验证 */
      isVerify: boolean;

      /** 用户权限：root,admin,guest */
      role: string;

      /** 用户ID */
      userId: string;

      /** 用户名 */
      username: string;
    }
    
      

        export class ResKnowledge {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.KnowledgeEntity>;
    }
    
      

        export class ResKnowledgeList {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.KnowledgeEntity>;
    }
    
      

        export class ResKnowledgeType {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: defs.KnowledgeTypeEntity;
    }
    
      

        export class ResKnowledgeTypeList {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.KnowledgeTypeEntity>;
    }
    
      

        export class ResKnowledgeTypeTree {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.KnowledgeTypeChildrenClass>;
    }
    
      

        export class ResLoginClass {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.LoginUserClass>;
    }
    
      

        export class ResUser {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: defs.UserEntity;
    }
    
      

        export class ResUserList {
      
      /** 返回码，0: 失败；1: 成功 */
      code: 0 | 1 | 0 | 1;

      /** 返回描述（成功为success, 失败为对应的描述） */
      message: string;

      /** payload */
      payload: Array<defs.UserEntity>;
    }
    
      

        export class UserEntity {
      
      /** 用户邮箱 */
      email: string;

      /** 用户邮箱是否已经被验证：true：已经被验证，false:还没被验证 */
      isVerify: boolean;

      /** 用户权限：root,admin,guest */
      role: string;

      /** 用户ID */
      userId: string;

      /** 用户名 */
      username: string;
    }
    
      
    }
    
    

      
      declare namespace API {
        
      }
    
    
    