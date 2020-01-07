export 
        class ChangeKnowledgeDto {
          
      /** 知识点详情 */
      detail = ''
      

      /** 关键字（多个关键字用,隔开） */
      keywords = ''
      

      /** 知识分类ID */
      knowledgeTypeId = undefined
      

      /** 知识点概述 */
      summary = ''
      

      /** 知识点标题 */
      title = ''
      

      /** 更新用户的ID */
      updatedBy = ''
      

      /** 知识点提醒点 */
      warning = ''
      
        }
      
export 
        class ChangeKnowledgeTypeDto {
          
      /** 分类描述 */
      description = ''
      

      /** 父ID */
      parentId = undefined
      

      /** 分类名称 */
      typeName = ''
      

      /** 创建人ID */
      updatedBy = ''
      
        }
      
export 
        class ChangeUserInfoDto {
          
      /** email */
      email = ''
      

      /** password */
      password = ''
      

      /** role */
      role = 'root'
      

      /** username */
      username = ''
      
        }
      
export 
        class CreateKnowledgeDto {
          
      /** 创建用户的ID */
      createdBy = ''
      

      /** 知识点详情 */
      detail = ''
      

      /** 关键字（多个关键字用,隔开） */
      keywords = ''
      

      /** 知识分类ID */
      knowledgeTypeId = undefined
      

      /** 知识点概述 */
      summary = ''
      

      /** 知识点标题 */
      title = ''
      

      /** 知识点提醒点 */
      warning = ''
      
        }
      
export 
        class CreateKnowledgeTypeDto {
          
      /** createdBy */
      createdBy = ''
      

      /** 分类描述 */
      description = ''
      

      /** parentId */
      parentId = undefined
      

      /** 分类名称 */
      typeName = ''
      
        }
      
export 
        class Date {
          
        }
      
export 
        class DeleteSuccessRes {
          
      /** 返回码，0: 成功；1: 失败 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** true: 操作成功；false: 操作失败 */
      payload = false
      
        }
      
export 
        class ErrorRes {
          
      /** 返回码，0: 成功 1: 失败 */
      code = 0
      

      /** 返回描述（成功为success, 失败为fail） */
      message = ''
      

      /** 返回的错误信息，为字符串时为错误描述；为数组或对象时为错误详情 */
      payload = undefined
      

      /** 请求的URL路径 */
      url = ''
      
        }
      
export 
        class KnowledgeEntity {
          
      /** 创建用户的ID */
      createdBy = ''
      

      /** createdTime */
      createdTime = undefined
      

      /** 知识点详情 */
      detail = ''
      

      /** 知识点ID */
      id = undefined
      

      /** 关键字列表，多个关键字之间用英文逗号隔开 */
      keywords = ''
      

      /** 知识点分类ID */
      knowledgeTypeId = undefined
      

      /** 知识点概述 */
      summary = ''
      

      /** 知识点标题 */
      title = ''
      

      /** 最后更新用户的ID */
      updatedBy = ''
      

      /** updatedTime */
      updatedTime = undefined
      

      /** 易错点提醒 */
      warning = ''
      
        }
      
export 
        class KnowledgeTypeChildrenClass {
          
      /** children */
      children = []
      

      /** 创建用户的ID */
      createdBy = ''
      

      /** createdTime */
      createdTime = undefined
      

      /** 分类描述 */
      description = ''
      

      /** 知识类ID */
      id = undefined
      

      /** 父ID，根节点父节点ID为-1 */
      parentId = undefined
      

      /** 类型树路径，用/隔开 */
      path = ''
      

      /** 知识类名 */
      typeName = ''
      

      /** 更新用户的ID */
      updatedBy = ''
      

      /** updatedTime */
      updatedTime = undefined
      
        }
      
export 
        class KnowledgeTypeEntity {
          
      /** 创建用户的ID */
      createdBy = ''
      

      /** createdTime */
      createdTime = undefined
      

      /** 分类描述 */
      description = ''
      

      /** 知识类ID */
      id = undefined
      

      /** 父ID，根节点父节点ID为-1 */
      parentId = undefined
      

      /** 类型树路径，用/隔开 */
      path = ''
      

      /** 知识类名 */
      typeName = ''
      

      /** 更新用户的ID */
      updatedBy = ''
      

      /** updatedTime */
      updatedTime = undefined
      
        }
      
export 
        class LoginByEmailDto {
          
      /** email */
      email = ''
      

      /** password */
      password = ''
      
        }
      
export 
        class LoginByUsernameDto {
          
      /** password */
      password = ''
      

      /** username */
      username = ''
      
        }
      
export 
        class LoginUserClass {
          
      /** 登录token值，需要在请求头中带有该token */
      accessToken = ''
      

      /** 用户邮箱 */
      email = ''
      

      /** 用户邮箱是否已经被验证：true：已经被验证，false:还没被验证 */
      isVerify = false
      

      /** 用户权限：root,admin,guest */
      role = ''
      

      /** 用户ID */
      userId = ''
      

      /** 用户名 */
      username = ''
      
        }
      
export 
        class ResKnowledge {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class ResKnowledgeList {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class ResKnowledgeType {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = new KnowledgeTypeEntity()
      
        }
      
export 
        class ResKnowledgeTypeList {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class ResKnowledgeTypeTree {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class ResLoginClass {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class ResUser {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = new UserEntity()
      
        }
      
export 
        class ResUserList {
          
      /** 返回码，0: 失败；1: 成功 */
      code = 0
      

      /** 返回描述（成功为success, 失败为对应的描述） */
      message = ''
      

      /** payload */
      payload = []
      
        }
      
export 
        class UserEntity {
          
      /** 用户邮箱 */
      email = ''
      

      /** 用户邮箱是否已经被验证：true：已经被验证，false:还没被验证 */
      isVerify = false
      

      /** 用户权限：root,admin,guest */
      role = ''
      

      /** 用户ID */
      userId = ''
      

      /** 用户名 */
      username = ''
      
        }
      