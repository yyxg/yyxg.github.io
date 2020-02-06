(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{184:function(v,_,l){"use strict";l.r(_);var i=l(0),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"面试维度汇总"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#面试维度汇总"}},[v._v("#")]),v._v(" 面试维度汇总")]),v._v(" "),l("h2",{attrs:{id:"网络编程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#网络编程"}},[v._v("#")]),v._v(" 网络编程")]),v._v(" "),l("ol",[l("li",[v._v("ISO模型与协议")]),v._v(" "),l("li",[v._v("http1.0：需要使用keep-alive参数来告知服务器端要建立一个长连接")]),v._v(" "),l("li",[v._v("http1.1：默认长连接。支持只发送header信息，可以用作权限请求。支持Host域。")]),v._v(" "),l("li",[v._v("http2.0：多路复用的技术，做到同一个连接并发处理多个请求。HTTP2.0使用HPACK算法对header的数据进行压缩。支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适加载静态资源。")]),v._v(" "),l("li",[v._v("会话层:负责管理主机之间的会话进程，负责建立、管理、终止进程之间的会话。")]),v._v(" "),l("li",[v._v("传输层:将上层数据分段并提供端到端的、可靠的或不可靠的传输，还要处理端到端的差错控制和流量控制问题。协议TCP、UDP、SPX")]),v._v(" "),l("li",[v._v("网络层:对子网间的数据包进行路由选择。此外，网络层还可以实现拥塞控制、网际互连等功能。协议IP、IPX、RIP、OSPF")]),v._v(" "),l("li",[v._v("数据链路层:在不可靠的物理介质上提供可靠的传输。该层的作用包括：物理地址寻址、数据的成帧、流量控制、数据的检错、重发等。协议SDLC、HDLC、PPP、STP、帧中继")]),v._v(" "),l("li",[v._v("TCPIP模型与协议")]),v._v(" "),l("li",[v._v("应用层：单位是数据段，协议有FTP、TELNET、HTTP、SMTP、SNMP、TFTP、NTP、DNS")]),v._v(" "),l("li",[v._v("运输层：单位是数据包，协议有TCP、UDP")]),v._v(" "),l("li",[v._v("网络层：单位是数据帧，协议有IP")]),v._v(" "),l("li",[v._v("网络接口层：单位是比特，ARP、RARP")]),v._v(" "),l("li",[v._v("三次握手与四次挥手")]),v._v(" "),l("li",[v._v("BIO NIO AIO")]),v._v(" "),l("li",[v._v("BIO：同步阻塞IO，每个请求都要一个线程来处理。")]),v._v(" "),l("li",[v._v("NIO：同步非阻塞IO，一个线程可以处理多个请求，适用于短连接、小数据。")]),v._v(" "),l("li",[v._v("AIO：异步非阻塞IO，一个线程处理多个请求，使用回调函数实现，适用于长连接、大数据。")]),v._v(" "),l("li",[v._v("DDOS攻击原理与防御方式")]),v._v(" "),l("li",[v._v("HTTP Get Flood：发送大量会产生sql查询的连接，使得数据库负载很高。")]),v._v(" "),l("li",[v._v("CSRF跨站请求伪造原理攻击者盗用了你的身份，以你的名义发送恶意请求。")]),v._v(" "),l("li",[v._v("CSRF攻击是源于WEB的隐式身份验证机制！WEB的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的！")]),v._v(" "),l("li",[v._v("防御方式：1.验证码；2. 后台生成token，让前端请求携带。3.使用对称加密，后端随机给前端一个密钥，前端进行加密，后端解密。")]),v._v(" "),l("li",[v._v("会话劫持通过暴力破解、 预测、窃取（通过XSS攻击）等方式获取到用户session")]),v._v(" "),l("li",[v._v("XSS攻击XSS攻击是Web攻击中最常见的攻击方法之一，它是通过对网页注入可执行代码且成功地被浏览器执行，达到攻击的目的，形成了一次有效XSS攻击，一旦攻击成功，它可以获取用户的联系人列表，然后向联系人发送虚假诈骗信息，可以删除用户的日志等等，有时候还和其他攻击方式同时实施比如SQL注入攻击服务器和数据库、Click劫持、相对链接劫持等实施钓鱼，它带来的危害是巨大的，是web安全的头号大敌。")]),v._v(" "),l("li",[v._v("XSS反射型攻击，恶意代码并没有保存在目标网站，通过引诱用户点击一个链接到目标网站的恶意链接来实施攻击的。")]),v._v(" "),l("li",[v._v("XSS存储型攻击，恶意代码被保存到目标网站的服务器中，这种攻击具有较强的稳定性和持久性，比较常见场景是在博客，论坛等社交网站上，但OA系统，和CRM系统上也能看到它身影，比如：某CRM系统的客户投诉功能上存在XSS存储型漏洞，黑客提交了恶意攻击代码，当系统管理员查看投诉信息时恶意代码执行，窃取了客户的资料，然而管理员毫不知情，这就是典型的XSS存储型攻击。")])]),v._v(" "),l("ul",[l("li",[v._v("解决方法")]),v._v(" "),l("li",[v._v("在表单提交或者url参数传递前，对需要的参数进行过滤")]),v._v(" "),l("li",[v._v("过滤用户输入。检查用户输入的内容中是否有非法内容。如<>（尖括号）、”（引号）、 ‘（单引号）、%（百分比符号）、;（分号）、()（括号）、&（& 符号）、+（加号）等")])]),v._v(" "),l("p",[v._v("28.RPC与HTTP服务的区别")]),v._v(" "),l("h2",{attrs:{id:"数据库原理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据库原理"}},[v._v("#")]),v._v(" 数据库原理")]),v._v(" "),l("ol",[l("li",[v._v("MYISAM与innodb搜索引擎原理MyISAM引擎使用B+Tree作为索引结构，叶节点的data域存放的是数据记录的地址。其采用索引文件与数据文件，索引文件只存放索引，叶子节点存放数据的物理地址。数据文件存放数据。其索引方式是非聚集的。")]),v._v(" "),l("li",[v._v("InnoDB也使用B+Tree作为索引结构。但是它的主索引与数据都放在一个文件中。这种索引叫做聚集索引，因为InnoDB的数据文件本身要按主键聚集，所以InnoDB要求表必须有主键（MyISAM可以没有），如果没有显式指定，则MySQL系统会自动选择一个可以唯一标识数据记录的列作为主键，如果不存在这种列，则MySQL自动为InnoDB表生成一个隐含字段作为主键，这个字段长度为6个字节，类型为长整形。")])]),v._v(" "),l("ul",[l("li",[v._v("区别一：InnoDB的主索引与数据都放在一个文件中。而MYISAM是分开存放的。")]),v._v(" "),l("li",[v._v("区别二：InnoDB的辅助索引data域存储相应记录主键的值而不是地址。")]),v._v(" "),l("li",[v._v("区别三：InnoDB的主键索引是聚集索引，而MYISAM不是聚集索引。")])]),v._v(" "),l("p",[v._v("3.索引，聚簇索引和二级索引的加锁区别")]),v._v(" "),l("ul",[l("li",[v._v("聚集（clustered）索引，也叫聚簇索引。数据行的物理顺序与列值（一般是主键的那一列）的逻辑顺序相同，一个表中只能拥有一个聚集索引。")]),v._v(" "),l("li",[v._v("非聚集（unclustered）索引。该索引中索引的逻辑顺序与磁盘上行的物理存储顺序不同，一个表中可以拥有多个非聚集索引。会发生二次查询。")]),v._v(" "),l("li",[v._v("稠密索引:稠密索引文件中的索引块保持键的顺序与文件中的排序顺序一致。")]),v._v(" "),l("li",[v._v("稀疏索引:稀疏索引没有为每个数据都创建一个索引,它比稠密索引节省了更多的存储空间，但查找给定值的记录需更多的时间。只有当数据文件是按照某个查找键排序时，在该查找键上建立的稀疏索引才能被使用，而稠密索引则可以应用在任何的查找键。")]),v._v(" "),l("li",[v._v("联合索引:将一张表中多个列组成联合索引(col1,col2,col3)，其生效方式满足最左前缀原则。")]),v._v(" "),l("li",[v._v("覆盖索引:对于二级索引而言，在innodb中一般是需要先根据二级索引查询到主键，然后在根据一级索引查询到数据。但是如果select的列都在索引中，就避免进行一级查询。")])]),v._v(" "),l("p",[v._v("4.主键选择")]),v._v(" "),l("ul",[l("li",[v._v("在使用InnoDB存储引擎时，如果没有特别的需要，请永远使用一个与业务无关的自增字段作为主键。")]),v._v(" "),l("li",[v._v("where 1 = 1:能够方便我们拼sql，但是使用了之后就无法使用索引优化策略，因此会进行全表扫描，影响效率。")])]),v._v(" "),l("p",[v._v("5.分表分库")]),v._v(" "),l("ul",[l("li",[v._v("水平拆分：依据表中的数据的逻辑关系，将同一个表中的数据依照某种条件拆分到多台数据库（主机）上面。按照1个或多个字段以及相应的规则，将一张表重的数据分到多张表中去。比如按照id%5的规则，将一张大表拆分成5张小表。适合具有超大表的系统。")]),v._v(" "),l("li",[v._v("垂直拆分：依照不同的表（或者Schema）来切分到不同的数据库（主机）之上。一般按照模块来分库。适合各业务之间耦合度非常低的系统。")])]),v._v(" "),l("p",[v._v("6.隔离级别")]),v._v(" "),l("ul",[l("li",[v._v("read uncommit:读不加锁，写加共享锁。会产生脏读、幻读。")]),v._v(" "),l("li",[v._v("read commit：读加共享锁，写加排它锁，但不加间隙锁。间隙锁的主要作用是防止不可重复读，但会加大锁的范围。")]),v._v(" "),l("li",[v._v("repeatable read(innodb默认):读加共享锁，写加间隙排它锁。注意，Innodb对这个级别进行了特殊处理，使得这个级别能够避免幻读，但不是所有引擎都能够防止幻读！(网易面试官问)")]),v._v(" "),l("li",[v._v("serialization：会给整张表加锁，强一致，但是效率低。")])]),v._v(" "),l("p",[v._v("7.innodb中的锁")]),v._v(" "),l("ul",[l("li",[v._v("MVCC(multi-Version Concurrency Control)：读不加锁，读写不冲突。适合写少读多的场景。读操作分为：快照读（返回记录的可见版本，不加锁）、当前读（记录的最新版本，加锁，保证其它记录不修改）。")]),v._v(" "),l("li",[v._v("LBCC(Lock-Based Concurrency Control)：")]),v._v(" "),l("li",[v._v("join原理Simple Nested-Loop Join：效率最低，按照join的次序，在join的属性上一个个扫描，并合并结果。")]),v._v(" "),l("li",[v._v("Index Nested-Loop Join：效率最高，join的属性上面有索引，根据索引来匹配。")]),v._v(" "),l("li",[v._v("Block Nested-Loop Join：用于没有索引的列。它会采用join buffer，将外表的值缓存到join buffer中，然后与内表进行批量比较，这样可以降低对外表的访问频率")])]),v._v(" "),l("p",[v._v("8.galera")]),v._v(" "),l("ul",[l("li",[v._v("多主架构：真正的多点读写的集群，在任何时候读写数据，都是最新的。")]),v._v(" "),l("li",[v._v("同步复制，各节点间无延迟且节点宕机不会导致数据丢失。")]),v._v(" "),l("li",[v._v("紧密耦合，所有节点均保持相同状态，节点间无不同数据。")]),v._v(" "),l("li",[v._v("无需主从切换操作。")]),v._v(" "),l("li",[v._v("无需进行读写分离。")]),v._v(" "),l("li",[v._v("并发复制：从节点在APPLY数据时，支持并行执行，有更好的性能表现。")]),v._v(" "),l("li",[v._v("故障切换：在出现数据库故障时，因为支持多点写入，切的非常容易。")]),v._v(" "),l("li",[v._v("热插拔：在服务期间，如果数据库挂了，只要监控程序发现的够快，不可服务时间就会非常少。在节点故障期间，节点本身对集群的影响非常小。")]),v._v(" "),l("li",[v._v("自动节点克隆：在新增节点，或者停机维护时，增量数据或者基础数据不需要人工手动备份提供，Galera Cluster会自动拉取在线节点数据，最终集群会变为一致。")]),v._v(" "),l("li",[v._v("对应用透明：集群的维护，对应用程序是透明的，几乎感觉不到。")])]),v._v(" "),l("p",[v._v("9.LSM Tree，主要应用于nessDB、leveldb、hbase")]),v._v(" "),l("ul",[l("li",[v._v("核心思想的核心就是放弃部分读能力，换取写入的最大化能力。它假设假定内存足够大，因此不需要每次有数据更新就必须将数据写入到磁盘中，而可以先将最新的数据驻留在内存中，等到积累到最后多之后，再使用"),l("strong",[v._v("归并排序")]),v._v("的方式将内存内的数据合并追加到磁盘队尾。（使用归并排序是要因为带排序树都是有序树）")]),v._v(" "),l("li",[v._v("LSM具有批量特性，存储延迟。B树在insert的时候可能会造成分裂，可能会造成随机读写。而LSM将多次单页随机写，变成一次多页随机写,复用了磁盘寻道时间，极大提升效率。")]),v._v(" "),l("li",[v._v("LSM Tree放弃磁盘读性能来换取写的顺序性。")]),v._v(" "),l("li",[v._v("一般会使用Bloom Filter来优化LSM。当将内存中的数据与磁盘数据合并的时候，先要判断数据是否有重复，如果不用Bloom Filter就需要在磁盘上一层层地找，而使用了之后就会降低搜索代价。")])]),v._v(" "),l("h2",{attrs:{id:"多线程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[v._v("#")]),v._v(" 多线程")]),v._v(" "),l("ol",[l("li",[v._v("synchronized、CAS")]),v._v(" "),l("li",[v._v("Collections")]),v._v(" "),l("li",[v._v("支持高并发的数据结构，如ConcurrentHashMap")]),v._v(" "),l("li",[v._v("基于AQS实现的锁、信号量、计数器原理")]),v._v(" "),l("li",[v._v("Runnable与Callable的区别")]),v._v(" "),l("li",[v._v("线程池")]),v._v(" "),l("li",[v._v("作用")])]),v._v(" "),l("ul",[l("li",[v._v("减少在创建和销毁线程上所花的时间以及系统资源的开销 。")]),v._v(" "),l("li",[v._v("当前任务与主线程隔离，能实现和主线程的异步执行，特别是很多可以分开重复执行的任务。")])]),v._v(" "),l("p",[v._v("8.阻塞队列")]),v._v(" "),l("p",[v._v("9.threadlocal")]),v._v(" "),l("h2",{attrs:{id:"spring框架"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#spring框架"}},[v._v("#")]),v._v(" Spring框架")]),v._v(" "),l("ol",[l("li",[v._v("IOC/DI")]),v._v(" "),l("li",[v._v("Core、Beans、Context、Expression Language")]),v._v(" "),l("li",[v._v("JDBC、ORM、OXM、JMS、Transaction")]),v._v(" "),l("li",[v._v("AOP")]),v._v(" "),l("li",[v._v("Web")]),v._v(" "),l("li",[v._v("Test")]),v._v(" "),l("li",[v._v("@Autowired原理")]),v._v(" "),l("li",[v._v("工厂模式")]),v._v(" "),l("li",[v._v("反射")]),v._v(" "),l("li",[v._v("自动配置@ConfigurationProperties(prefix = “hello”)：读取以hello为开头的配置，属性类使用")]),v._v(" "),l("li",[v._v("@Configuration：指名当前类为配置类")]),v._v(" "),l("li",[v._v("@EnableConfigurationProperties(Properties)：指名配置属性类")]),v._v(" "),l("li",[v._v("@ConditionalOnClass(Condition.class)：条件类，只有Condition.class存在，当前配置类才生效")]),v._v(" "),l("li",[v._v("Spring Boot在spring.factories配置了很多全限定名的配置类。")])]),v._v(" "),l("h2",{attrs:{id:"redis"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[v._v("#")]),v._v(" Redis")]),v._v(" "),l("p",[l("strong",[v._v("核心原理")])]),v._v(" "),l("ol",[l("li",[v._v("常用数据类型String:二进制安全，可以存任何数据，比如序列化的图片。最大长度位512M.")]),v._v(" "),l("li",[v._v("Hash:是KV对集合，本质是String类型的KV映射，适合存储对象。")]),v._v(" "),l("li",[v._v("List:简单字符串链表，可以在left、right两边插入，本质是双向链表。缓冲区也是用这个实现。")]),v._v(" "),l("li",[v._v("Set:String类型的无序集合,内部实现是一个 value永远为null的HashMap，实际就是通过计算hash的方式来快速排重的，这也是set能提供判断一个成员是否在集合内的原因。")]),v._v(" "),l("li",[v._v("zset:有序集合，每个元素会关联一个double类型的score，然后根据score进行排序。注意：元素不能重复，但是score是可以重复的。使用HashMap和跳跃表(SkipList)来保证数据的存储和有序，HashMap里放的是成员到score的映射，而跳跃表里存放的是所有的成员，排序依据是HashMap里存的score.")])]),v._v(" "),l("ul",[l("li",[v._v("pub/sub:在Redis中，你可以设定对某一个key值进行消息发布及消息订阅，当一个key值上进行了消息发布后，所有订阅它的客户端都会收到相应的消息。")])]),v._v(" "),l("p",[l("strong",[v._v("持久化")])]),v._v(" "),l("ol",[l("li",[v._v("RDB：一种是手动执行持久化命令来持久化快照；另一种是在配置文件中配置策略，来自动持久化。持久化命令有save、bgsave两种，bgsave会调用fork命令，产生子进程来进行持久化，而父进程继续处理数据，但是持久化的快照是fork那一刻的快照，因此这种策略可能会丢失一部分数据。特点：每次都记录所有数据，恢复快，子进程不影响父进程性能。")]),v._v(" "),l("li",[v._v("AOF：append only file，将每条操作命令都记录到appendonly.aof文件中，但是不会立马写入硬盘，我们可以配置always（每有一个命令，都同步）、everysec（每秒同步一次）、no（没30秒同步一次）。往往everysec就够了。aof数据损失要比RDB小。特点：有序记录所有操作，数据丢失更少，会对操作做压缩优化，bgrewriteaof也会fork子进程，不影响父进程性能")])]),v._v(" "),l("p",[l("strong",[v._v("事务")])]),v._v(" "),l("ol",[l("li",[v._v("Transactions:不是严格的ACID的事务，但是这个Transactions还是提供了基本的命令打包执行的功能（在服务器不出问题的情况下，可以保证一连串的命令是顺序在一起执行的，中间有会有其它客户端命令插进来执行）。")]),v._v(" "),l("li",[v._v("Redis还提供了一个Watch功能，你可以对一个key进行Watch，然后再执行Transactions，在这过程中，如果这个Watched的值进行了修改，那么这个Transactions会发现并拒绝执行。")])]),v._v(" "),l("h2",{attrs:{id:"kafka"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[v._v("#")]),v._v(" KafKA")]),v._v(" "),l("ol",[l("li",[v._v("topic")]),v._v(" "),l("li",[v._v("broker")]),v._v(" "),l("li",[v._v("partition")]),v._v(" "),l("li",[v._v("consumer")]),v._v(" "),l("li",[v._v("producer")]),v._v(" "),l("li",[v._v("stream")]),v._v(" "),l("li",[v._v("存储机制")]),v._v(" "),l("li",[v._v("网络模型")]),v._v(" "),l("li",[v._v("注意：partition之间是无序的")]),v._v(" "),l("li",[v._v("消息队列的生产者消费者中消费者没有收到消息怎么办，消息有顺序比如1.2.3但是收到的却是1.3.2怎么办？消息发过来的过程中损坏或者出错怎么办")])]),v._v(" "),l("h2",{attrs:{id:"spring-security"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[v._v("#")]),v._v(" Spring security")]),v._v(" "),l("ol",[l("li",[v._v("拦截器栈")]),v._v(" "),l("li",[v._v("@PreAuthorize")]),v._v(" "),l("li",[v._v("@PostAuthorize")]),v._v(" "),l("li",[v._v("支持Expression Language")])]),v._v(" "),l("h2",{attrs:{id:"jvm原理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm原理"}},[v._v("#")]),v._v(" jvm原理")]),v._v(" "),l("p",[v._v("内存模型、垃圾收集器、CMS与G1是重点")]),v._v(" "),l("p",[l("strong",[v._v("垃圾收集算法")])]),v._v(" "),l("ul",[l("li",[v._v("标记-清除(CMS)容易产生碎片，当碎片太多会提前触发Full GC")]),v._v(" "),l("li",[v._v("复制(年轻代基本用这个算法)会浪费一半的可能感觉")]),v._v(" "),l("li",[v._v("标记-整理(serial Old、Parallel Old)")]),v._v(" "),l("li",[v._v("Serial：采用单线程stop-the-world的方式进行收集。当内存不足时，串行GC设置停顿标识，待所有线程都进入安全点(Safepoint)时，应用线程暂停，串行GC开始工作，采用单线程方式回收空间并整理内存。串行收集器特别适合堆内存不高、单核甚至双核CPU的场合。")]),v._v(" "),l("li",[v._v("ParNew")]),v._v(" "),l("li",[v._v("Parallel Scavenge")])]),v._v(" "),l("p",[l("strong",[v._v("CMS")]),v._v("：")]),v._v(" "),l("ul",[l("li",[v._v("初始标记(stop of world)")]),v._v(" "),l("li",[v._v("并行标记、预清理")]),v._v(" "),l("li",[v._v("重新标记(stop of world)")]),v._v(" "),l("li",[v._v("并行清理")])]),v._v(" "),l("p",[l("strong",[v._v("G1")])]),v._v(" "),l("p",[v._v("将堆分成很多region，可以同时堆年轻代与老年代进行收集")]),v._v(" "),l("ul",[l("li",[v._v("初始标记（stop of world）:初始标记(Initial Mark)负责标记所有能被直接可达的根对象(原生栈对象、全局对象、JNI对象)")]),v._v(" "),l("li",[v._v("并行标记:")]),v._v(" "),l("li",[v._v("重新标记（stop of world）:")]),v._v(" "),l("li",[v._v("清理（stop of world）:")]),v._v(" "),l("li",[v._v("重置")])]),v._v(" "),l("p",[l("strong",[v._v("gc触发条件")])]),v._v(" "),l("ol",[l("li",[v._v("从年轻代分区拷贝存活对象时，无法找到可用的空闲分区，会触发Minor GC")]),v._v(" "),l("li",[v._v("从老年代分区转移存活对象时，无法找到可用的空闲分区，会触发Major GC")]),v._v(" "),l("li",[v._v("分配巨型对象时在老年代无法找到足够的连续分区，会触发Major GC")]),v._v(" "),l("li",[v._v("可达性分析：通过检查一块内存空间能否被root达到，来判断是否对其进行回收。")])]),v._v(" "),l("p",[l("strong",[v._v("jdk不同版本新增的部分特性")])]),v._v(" "),l("p",[l("strong",[v._v("jvm调优")])]),v._v(" "),l("ul",[l("li",[v._v("VisualVM:JDK自带JVM可视化工具，能过对内存、gc、cpu、thread、class、变量等等信息进行可视化。")])]),v._v(" "),l("h2",{attrs:{id:"设计模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[v._v("#")]),v._v(" 设计模式")]),v._v(" "),l("ol",[l("li",[v._v("单例双重检查")]),v._v(" "),l("li",[v._v("观察者模式")]),v._v(" "),l("li",[v._v("装饰者模式:jdk中输入输出流用到了该模式")]),v._v(" "),l("li",[v._v("适配器模式:jdk中Reader、writer用到了该模式")]),v._v(" "),l("li",[v._v("代理模式")]),v._v(" "),l("li",[v._v("静态代理")]),v._v(" "),l("li",[v._v("JDK动态代理")]),v._v(" "),l("li",[v._v("Cglib到动态代理")]),v._v(" "),l("li",[v._v("生产者消费者模式")]),v._v(" "),l("li",[v._v("工厂模式")])]),v._v(" "),l("h2",{attrs:{id:"项目管理与运维工具"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#项目管理与运维工具"}},[v._v("#")]),v._v(" 项目管理与运维工具")]),v._v(" "),l("ol",[l("li",[v._v("git+Jenkins")]),v._v(" "),l("li",[v._v("maven")]),v._v(" "),l("li",[v._v("K8Spod：Pod是所有业务类型的基础，所有的容器均在Pod中运行,它是一个或多个容器的组合。每一个Pod都会被指派一个唯一的Ip地址，在Pod中的每一个容器共享网络命名空间，包括Ip地址和网络端口。Pod能够被指定共享存储卷的集合，在Pod中所有的容器能够访问共享存储卷，允许这些容器共享数据。")]),v._v(" "),l("li",[v._v("kubelet：kubelet负责管理pods和它们上面的容器，images镜像、volumes、etc。")]),v._v(" "),l("li",[v._v("ingress，用于负载均衡")]),v._v(" "),l("li",[v._v("docker")]),v._v(" "),l("li",[v._v("docker与虚拟机的区别")])]),v._v(" "),l("h2",{attrs:{id:"数据结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[v._v("#")]),v._v(" 数据结构")]),v._v(" "),l("ol",[l("li",[v._v("平衡二叉树AVL")]),v._v(" "),l("li",[v._v("高度log(n)")]),v._v(" "),l("li",[v._v("插入时间复杂度log(n)")]),v._v(" "),l("li",[v._v("红黑树")]),v._v(" "),l("li",[v._v("插入时间复杂度log(n)")]),v._v(" "),l("li",[v._v("查找时间复杂度log(n)")]),v._v(" "),l("li",[v._v("在查找是，红黑树虽然复杂度也是log(n),但是从效率上比要略低于AVL。但是其优势在于插入元素的时候，不会像AVL那样频繁地旋转。")]),v._v(" "),l("li",[v._v("B+Tree：只有叶子节点存值，非叶子节点只存key和child，因此同样大小的物理页上能存放更多的节点。每一层的节点数量越多，意味着层次越少，也就意味着IO次数越少，因此非常适合数据库以及文件系统。")]),v._v(" "),l("li",[v._v("大根堆：采用数组存储树，是一个完全树。先插入到数组最后的位置上，然后采用上浮的思想，将该元素与比它小的父元素调换，直到parent>target，浮到root;然后将root与未排序的最后一个元素交换位置；重复以上步骤，直到所有元素都有序。插入如查找的复杂度都是log(n)。")]),v._v(" "),l("li",[v._v("优先队列PriorityQueue，Java中使用小根堆实现，非线程安全。")]),v._v(" "),l("li",[v._v("优先阻塞队列PriorityBlockQueue，线程安全。")])]),v._v(" "),l("h1",{attrs:{id:"算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[v._v("#")]),v._v(" 算法")]),v._v(" "),l("ol",[l("li",[v._v("快排")]),v._v(" "),l("li",[v._v("时间复杂度O(nlog(n))")]),v._v(" "),l("li",[v._v("空间复杂度O(log(n))")]),v._v(" "),l("li",[v._v("堆排序")]),v._v(" "),l("li",[v._v("时间复杂度O(nlog(n))")]),v._v(" "),l("li",[v._v("空间复杂度O(1)")]),v._v(" "),l("li",[v._v("归并排序")]),v._v(" "),l("li",[v._v("时间复杂度O(nlog(n))")]),v._v(" "),l("li",[v._v("空间复杂度O(n)")]),v._v(" "),l("li",[v._v("跳表时间复杂度O(log(n))")]),v._v(" "),l("li",[v._v("空间复杂度O(2n)")]),v._v(" "),l("li",[v._v("高度O(log(n))")])]),v._v(" "),l("h2",{attrs:{id:"分布式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分布式"}},[v._v("#")]),v._v(" 分布式")]),v._v(" "),l("p",[l("strong",[v._v("cap理论")])]),v._v(" "),l("ol",[l("li",[v._v("可用性")]),v._v(" "),l("li",[v._v("一致性")]),v._v(" "),l("li",[v._v("分区容忍性：对网络断开的容忍度，有点像鲁棒性")]),v._v(" "),l("li",[v._v("拜占庭将军问题")])]),v._v(" "),l("p",[l("strong",[v._v("Raft 算法")])]),v._v(" "),l("ul",[l("li",[v._v("有leader、follower、candidate")])]),v._v(" "),l("p",[l("strong",[v._v("同步流程")])]),v._v(" "),l("ol",[l("li",[v._v("由客户端提交数据到Leader节点。")]),v._v(" "),l("li",[v._v("由Leader节点把数据复制到集群内所有的Follower节点。如果一次复制失败，会不断进行重试。")]),v._v(" "),l("li",[v._v("Follower节点们接收到复制的数据，会反馈给Leader节点。")]),v._v(" "),l("li",[v._v("如果Leader节点接收到超过半数的Follower反馈，表明复制成功。于是提交自己的数据，并通知客户端数据提交成功。")]),v._v(" "),l("li",[v._v("由Leader节点通知集群内所有的Follower节点提交数据，从而完成数据同步流程。")])]),v._v(" "),l("h2",{attrs:{id:"zookeeper"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[v._v("#")]),v._v(" "),l("strong",[v._v("zookeeper")])]),v._v(" "),l("ol",[l("li",[v._v("Zab（Zookeeper Atomic Broadcast）协议,有两种模式：")])]),v._v(" "),l("ul",[l("li",[v._v("它们分别是：恢复模式（选主）和广播模式（同步）。")]),v._v(" "),l("li",[v._v("有两种算法：1. basic paxos；2. fast paxos（默认）")])]),v._v(" "),l("ol",[l("li",[v._v("文件系统：zookeeper的通知机制、分布式锁、队列管理、配置管理都是基于文件系统的。")]),v._v(" "),l("li",[v._v("分布式锁：有了zookeeper的一致性文件系统，锁的问题变得容易。锁服务可以分为两类，一个是保持独占，另一个是控制时序。")]),v._v(" "),l("li",[v._v("独占锁：将zookeeper上的一个znode看作是一把锁，通过createznode的方式来实现。所有客户端都去创建 /distribute_lock 节点，最终成功创建的那个客户端也即拥有了这把锁。用完删除掉自己创建的distribute_lock 节点就释放出锁。")]),v._v(" "),l("li",[v._v("控制时序锁：/distribute_lock 已经预先存在，所有客户端在它下面创建临时顺序编号目录节点，和选master一样，编号最小的获得锁，用完删除。")]),v._v(" "),l("li",[v._v("队列管理，分为同步队列、非同步队列")]),v._v(" "),l("li",[v._v("数据复制的好处")])]),v._v(" "),l("ul",[l("li",[v._v("容错：一个节点出错，不致于让整个系统停止工作，别的节点可以接管它的工作；")]),v._v(" "),l("li",[v._v("提高系统的扩展能力 ：把负载分布到多个节点上，或者增加节点来提高系统的负载能力；")]),v._v(" "),l("li",[v._v("提高性能：让客户端本地访问就近的节点，提高用户访问速度。")])]),v._v(" "),l("p",[v._v("5.一致性hash算法原理")]),v._v(" "),l("h2",{attrs:{id:"微服务"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#微服务"}},[v._v("#")]),v._v(" 微服务")]),v._v(" "),l("p",[l("strong",[v._v("Spring cloud")])]),v._v(" "),l("ul",[l("li",[v._v("网关：zuul")]),v._v(" "),l("li",[v._v("分布式版本化配置 config")]),v._v(" "),l("li",[v._v("服务注册和发现：Eureka，配置时需要注意多久刷新列表一次，多久监测心跳等。")]),v._v(" "),l("li",[v._v("service-to-service 调用")]),v._v(" "),l("li",[v._v("负载均衡：Ribbon；在生成RestTemplate的bean时，通过@LoadBalanced注解可以使得RestTemplate的调用")]),v._v(" "),l("li",[v._v("断路器：Hystrix")]),v._v(" "),l("li",[v._v("监控：spring admin。在启动类上加@EnableAdminServer注解。")])]),v._v(" "),l("h1",{attrs:{id:"java-web"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#java-web"}},[v._v("#")]),v._v(" java web")]),v._v(" "),l("ol",[l("li",[v._v("servlet工作原理")]),v._v(" "),l("li",[v._v("tomcat工作原理,好文，强推")]),v._v(" "),l("li",[v._v("container")])]),v._v(" "),l("h2",{attrs:{id:"linux"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[v._v("#")]),v._v(" linux")]),v._v(" "),l("ol",[l("li",[v._v("系统结构，讲得很好，强推")]),v._v(" "),l("li",[v._v("硬链接与软连接")]),v._v(" "),l("li",[v._v("硬链接：数据节点通过引用计数的方式来对指向它的硬链接计数，当计数为0就删除。")]),v._v(" "),l("li",[v._v("软连接：我们可以把它看成是快捷方式，它只是记录了某个文件的硬链接的路径，如果我们把源文件删除，再重新创建一个相同名字的文件，那么软连接指向的就是新创建的文件。")]),v._v(" "),l("li",[v._v("虚拟文件系统(VFS)：文件系统是有很多实现的，比如ext2、ext3、FAT等等，而VFS则是存在于应用程序与文件系统中间，它封装了open、close、read、write等等操作文件系统的接口，为应用程序屏蔽掉不同文件系统之间的差异。")]),v._v(" "),l("li",[v._v("VFS数据结构")])]),v._v(" "),l("h1",{attrs:{id:"其它"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[v._v("#")]),v._v(" 其它")]),v._v(" "),l("ul",[l("li",[v._v("bitmap，大文件交集")]),v._v(" "),l("li",[v._v("Elasticsearch索引原理")]),v._v(" "),l("li",[v._v("从内存到屏幕经历了啥")]),v._v(" "),l("li",[v._v("高并发场景的限流，你怎么来确定限流限多少，模拟场景和实际场景有区别怎么解决，")])])])}),[],!1,null,null,null);_.default=e.exports}}]);