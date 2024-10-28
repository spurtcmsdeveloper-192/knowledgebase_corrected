
export const GET_POSTS_LIST_QUERY = `query ChannelEntriesListNew($commonFilter:Filter,$sort:Sort,
  $entryFilter:EntriesFilter,
    $additionalData:EntriesAdditionalData){
      ChannelEntriesList(commonFilter:$commonFilter,sort:$sort,
      entryFilter:$entryFilter,AdditionalData:$additionalData){
        channelEntriesList{
          id
          title
          slug
          description
          userId
          channelId
          status
          isActive
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          coverImage
          thumbnailImage
          metaTitle
          metaDescription
          keyword
          categoriesId
          relatedArticles
          featuredEntry
          viewCount
          author
          sortOrder
          createTime
          readingTime
          publishedTime
          tags
          excerpt
          imageAltTag
          categories{
            id
            categoryName
            categorySlug
            description
            imagePath
            createdOn
            createdBy
            modifiedOn
            modifiedBy
            parentId
            tenantId
          }
          additionalFields{
            sections{
              id
              sectionName
              sectionTypeId
              createdOn
              createdBy
              modifiedOn
              modifiedBY
              orderIndex
              tenantId  
            }
            fields{
              id
              fieldName
              fieldTypeId
              mandatoryField
              optionExist
              createdOn
              createdBy
              modifiedOn
              modifiedBY
              fieldDesc
              orderIndex
              imagePath
              datetimeFormat
              timeFormat
              sectionParentId
              characterAllowed
              fieldTypeName
              fieldValue{
                id
                fieldValue
                createdOn
                createdBy
                modifiedOn
                modifiedBY
                tenantId 
              }
              fieldOptions{
                id
                optionName
                optionValue
                createdOn
                createdBy
                modifiedOn
                modifiedBY
                tenantId
              }
              tenantId
              
            }
            
          }
          authorDetails{
            id
            firstName
            lastName
            email
            mobileNo
            isActive
            profileImagePath
            createdOn
            createdBy
            modifiedOn
            modifiedBy
            tenantId
          }
          memberProfile{
            id
            memberId
            profileName
            profileSlug
            profilePage
            memberDetails
            companyName
            companyLocation
            companyLogo
            about
            seoTitle
            seoDescription
            seoKeyword
            linkedin
            twitter
            website
            createdBy
            createdOn
            modifiedOn
            modifiedBy
            claimStatus
            IsActive
            tenantId
            claimDate
          }
          tenantId
        }
        count
      }
    }
`;

  export const GET_POSTS_CATEGORYLIST_QUERY = `query CategoryList($categoryFilter:CategoryFilter,
    $commonFilter: Filter) {
      CategoryList(categoryFilter:$categoryFilter,
        commonFilter:$commonFilter){
      categorylist{
        id
        categoryName
        categorySlug
        description
        imagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        parentId
        tenantId
      },
      count
    }
    
  }
  `;

  
export const GET_POSTS_SLUG_QUERY = `query entryDetail($id:Int,$slug:String,
  $AdditionalData:EntriesAdditionalData){
    ChannelEntryDetail(id:$id,slug:$slug,
      AdditionalData:$AdditionalData){
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        coverImage
        createdOn
        categoriesId
        #contentChunk{
          #data
          #length
        #}
        authorDetails{
          id
          firstName
          lastName
          email
          mobileNo
          isActive
          profileImagePath
          #createdOn
          createdBy
          modifiedOn
          modifiedBy
          tenantId
        }
      }
    }

  `

  // query entryDetail($id:Int,$slug:String,
  //   $AdditionalData:EntriesAdditionalData){
  //     ChannelEntryDetail(id:$id,slug:$slug,
  //       AdditionalData:$AdditionalData){
  //        id
  //         title
  //         slug
  //         description
  //         userId
  //         channelId
  //         status
  //         isActive
  //         createdOn
  //         createdBy
  //         modifiedOn
  //         modifiedBy
  //         coverImage
  //         thumbnailImage
  //         metaTitle
  //         metaDescription
  //         keyword
  //         categoriesId
  //         relatedArticles
  //         featuredEntry
  //         viewCount
  //         author
  //         sortOrder
  //         createTime
  //         readingTime
  //         publishedTime
  //         tags
  //         excerpt
  //         imageAltTag
  //         categories{
  //           id
  //           categoryName
  //           categorySlug
  //           description
  //           imagePath
  //           createdOn
  //           createdBy
  //           modifiedOn
  //           modifiedBy
  //           parentId
  //           tenantId
  //         }
  //         additionalFields{
  //           sections{
  //             id
  //             sectionName
  //             sectionTypeId
  //             createdOn
  //             createdBy
  //             modifiedOn
  //             modifiedBY
  //             orderIndex
  //             tenantId  
  //           }
  //           fields{
  //             id
  //             fieldName
  //             fieldTypeId
  //             mandatoryField
  //             optionExist
  //             createdOn
  //             createdBy
  //             modifiedOn
  //             modifiedBY
  //             fieldDesc
  //             orderIndex
  //             imagePath
  //             datetimeFormat
  //             timeFormat
  //             sectionParentId
  //             characterAllowed
  //             fieldTypeName
  //             fieldValue{
  //               id
  //               fieldValue
  //               createdOn
  //               createdBy
  //               modifiedOn
  //               modifiedBY
  //               tenantId 
  //             }
  //             fieldOptions{
  //               id
  //               optionName
  //               optionValue
  //               createdOn
  //               createdBy
  //               modifiedOn
  //               modifiedBY
  //               tenantId
  //             }
  //             tenantId
              
  //           }
            
  //         }
  //         authorDetails{
  //           id
  //           firstName
  //           lastName
  //           email
  //           mobileNo
  //           isActive
  //           profileImagePath
  //           createdOn
  //           createdBy
  //           modifiedOn
  //           modifiedBy
  //           tenantId
  //         }
  //         memberProfile{
  //           id
  //           memberId
  //           profileName
  //           profileSlug
  //           profilePage
  //           memberDetails
  //           companyName
  //           companyLocation
  //           companyLogo
  //           about
  //           seoTitle
  //           seoDescription
  //           seoKeyword
  //           linkedin
  //           twitter
  //           website
  //           createdBy
  //           createdOn
  //           modifiedOn
  //           modifiedBy
  //           claimStatus
  //           IsActive
  //           tenantId
  //           claimDate
  //         }
  //         tenantId
  //       }
      
  //     }
    
  