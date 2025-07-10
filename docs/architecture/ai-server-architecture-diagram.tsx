import React, { useState } from 'react';
import { ChevronRight, Server, Shield, Database, Cloud, Monitor, Users, Bot, GitBranch, MessageSquare, Terminal, Lock, Eye, Activity, Globe, Cpu, HardDrive, Network, Layers, Zap, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const ArchitectureDiagram = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [showDataFlow, setShowDataFlow] = useState(false);
  
  const layers = [
    {
      id: 'client',
      name: '클라이언트 계층',
      color: 'from-blue-500 to-blue-600',
      icon: Monitor,
      components: [
        { name: 'Electron Desktop App', desc: 'Windows/macOS 크로스플랫폼' },
        { name: 'React UI', desc: 'Tailwind CSS, TypeScript' },
        { name: 'WebSocket Client', desc: '실시간 양방향 통신' },
        { name: 'Platform Service', desc: 'OS별 네이티브 기능' }
      ]
    },
    {
      id: 'gateway',
      name: 'API Gateway 계층',
      color: 'from-purple-500 to-purple-600',
      icon: Shield,
      components: [
        { name: 'Nginx Reverse Proxy', desc: 'SSL 터미네이션, 로드밸런싱' },
        { name: 'Auth Service', desc: 'JWT/OAuth2 인증' },
        { name: 'RBAC Engine', desc: '5단계 역할 기반 권한' },
        { name: 'Rate Limiter', desc: 'DDoS 방어, API 제한' }
      ]
    },
    {
      id: 'application',
      name: '애플리케이션 계층',
      color: 'from-green-500 to-green-600',
      icon: Cpu,
      components: [
        { name: 'FastAPI Backend', desc: 'Python 3.11, 비동기 처리' },
        { name: 'Supervisor Agent', desc: 'LangGraph 오케스트레이션' },
        { name: 'Expert Agents', desc: '5개 도메인 전문가 (Infra/Security/Network/DB/Cloud)' },
        { name: 'Admin Services', desc: '관리자 포털, 승인 워크플로우' }
      ]
    },
    {
      id: 'agentcard',
      name: 'Agent Card 시스템',
      color: 'from-yellow-500 to-yellow-600',
      icon: GitBranch,
      components: [
        { name: 'Card Protocol', desc: '표준화된 에이전트 간 통신' },
        { name: 'Card Router', desc: '지능형 라우팅 및 부하 분산' },
        { name: 'Card Security', desc: '디지털 서명, 암호화' },
        { name: 'Approval Engine', desc: '5단계 승인 워크플로우' }
      ]
    },
    {
      id: 'mcp',
      name: 'MCP Integration Gateway',
      color: 'from-indigo-500 to-indigo-600',
      icon: Network,
      components: [
        { name: 'Desktop Commander', desc: '파일/명령어/프로세스 관리' },
        { name: 'PostgreSQL MCP', desc: 'DB 쿼리 및 스키마 관리' },
        { name: 'GitHub/GitLab MCP', desc: 'DevOps 워크플로우' },
        { name: 'Slack MCP', desc: '알림 및 협업' }
      ]
    },
    {
      id: 'proxy',
      name: 'Secure Proxy 계층',
      color: 'from-red-500 to-red-600',
      icon: Lock,
      components: [
        { name: 'SSH Handler', desc: 'Linux 서버 원격 접속' },
        { name: 'API Handler', desc: 'REST API 통합' },
        { name: 'Credential Manager', desc: 'Vault 기반 자격증명' },
        { name: 'Audit Logger', desc: '완전한 감사 추적' }
      ]
    },
    {
      id: 'database',
      name: '데이터베이스 계층',
      color: 'from-orange-500 to-orange-600',
      icon: Database,
      components: [
        { name: 'PostgreSQL', desc: '트랜잭션 데이터, 사용자/권한' },
        { name: 'MongoDB', desc: 'Agent 로그, 비정형 데이터' },
        { name: 'Qdrant', desc: 'AI 벡터 DB, 임베딩 검색' },
        { name: 'InfluxDB', desc: '시계열 메트릭' },
        { name: 'Redis', desc: '세션, 캐시, 실시간 상태' },
        { name: 'HashiCorp Vault', desc: '암호화된 자격증명' }
      ]
    },
    {
      id: 'monitoring',
      name: '모니터링 계층',
      color: 'from-teal-500 to-teal-600',
      icon: Activity,
      components: [
        { name: 'Prometheus + Grafana', desc: '메트릭 수집 및 시각화' },
        { name: 'ELK Stack', desc: '중앙집중식 로깅' },
        { name: 'Jaeger', desc: '분산 추적' },
        { name: 'AI Anomaly Detection', desc: '이상 징후 자동 탐지' }
      ]
    }
  ];

  const dataFlows = [
    { from: 0, to: 1, label: 'HTTPS/WSS' },
    { from: 1, to: 2, label: 'JWT Auth' },
    { from: 2, to: 3, label: 'Agent Card' },
    { from: 3, to: 4, label: 'MCP Protocol' },
    { from: 4, to: 5, label: 'Secure Proxy' },
    { from: 2, to: 6, label: 'Data R/W' },
    { from: 6, to: 7, label: 'Metrics' }
  ];

  const keyFeatures = [
    { icon: Shield, title: 'Zero-Trust 보안', desc: 'AI는 접속 정보를 모름' },
    { icon: Bot, title: 'LangGraph AI', desc: 'Supervisor-Expert 아키텍처' },
    { icon: GitBranch, title: 'Agent Card', desc: '표준화된 통신 프로토콜' },
    { icon: Zap, title: '6개 MCP 활용', desc: '검증된 오픈소스 사용' },
    { icon: Lock, title: '5계층 보안', desc: '다층 방어 체계' },
    { icon: Activity, title: 'AI 모니터링', desc: '지능형 이상 탐지' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI Server Management Platform - 전체 아키텍처
        </h1>
        <p className="text-gray-300">Zero-Trust 보안 모델 기반 AI 에이전트 서버 관리 플랫폼</p>
      </div>

      {/* 핵심 특징 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {keyFeatures.map((feature, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <feature.icon className="w-8 h-8 mb-2 text-blue-400" />
            <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
            <p className="text-xs text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* 데이터 플로우 토글 */}
      <div className="mb-6">
        <button
          onClick={() => setShowDataFlow(!showDataFlow)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
        >
          <Eye className="w-4 h-4" />
          {showDataFlow ? '아키텍처 레이어 보기' : '데이터 플로우 보기'}
        </button>
      </div>

      {/* 메인 아키텍처 다이어그램 */}
      <div className="relative bg-gray-800 rounded-lg p-6 mb-8">
        {!showDataFlow ? (
          <div className="space-y-4">
            {layers.map((layer, idx) => (
              <div key={layer.id} className="relative">
                <div
                  className={`bg-gradient-to-r ${layer.color} p-1 rounded-lg cursor-pointer transform transition-all hover:scale-[1.02] ${
                    selectedLayer === idx ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={() => setSelectedLayer(selectedLayer === idx ? null : idx)}
                >
                  <div className="bg-gray-900 rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <layer.icon className="w-6 h-6" />
                        <h3 className="text-lg font-semibold">{layer.name}</h3>
                      </div>
                      <ChevronRight className={`w-5 h-5 transform transition-transform ${
                        selectedLayer === idx ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    {selectedLayer === idx && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {layer.components.map((comp, compIdx) => (
                          <div key={compIdx} className="bg-gray-800 p-3 rounded-md">
                            <h4 className="font-medium text-sm mb-1">{comp.name}</h4>
                            <p className="text-xs text-gray-400">{comp.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {idx < layers.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-0.5 h-8 bg-gray-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-4">데이터 플로우 및 통신 경로</h3>
            
            {/* 데이터 플로우 시각화 */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-400" />
                  사용자 요청 플로우
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">1.</span>
                    <span>사용자 → Electron App → "서버 web-01의 nginx 상태 확인"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">2.</span>
                    <span>WebSocket → API Gateway (JWT 인증)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">3.</span>
                    <span>FastAPI → Supervisor Agent (의도 분석)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">4.</span>
                    <span>Agent Card 생성 → Infrastructure Expert 선택</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">5.</span>
                    <span>MCP Gateway → Secure Proxy (원격 서버)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">6.</span>
                    <span>SSH 실행 → "systemctl status nginx"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">7.</span>
                    <span>결과 반환 → 사용자 친화적 응답 생성</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  보안 플로우 (Zero-Trust)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2 text-yellow-400">AI 에이전트가 아는 정보</h5>
                    <ul className="space-y-1 text-gray-300">
                      <li>• 논리적 서버 ID: "web-01"</li>
                      <li>• 작업 의도: "nginx 상태 확인"</li>
                      <li>• 사용자 권한 레벨</li>
                      <li>• 승인 필요 여부</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-red-400">Secure Proxy만 아는 정보</h5>
                    <ul className="space-y-1 text-gray-300">
                      <li>• 실제 IP: 192.168.1.100</li>
                      <li>• SSH 키 위치</li>
                      <li>• 접속 계정 정보</li>
                      <li>• 포트 번호</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                  Agent Card 통신 예시
                </h4>
                <pre className="text-xs bg-gray-800 p-3 rounded overflow-x-auto">
{`{
  "card_id": "550e8400-e29b-41d4-a716-446655440000",
  "card_type": "DELEGATION",
  "sender": {
    "agent_id": "supervisor_001",
    "agent_type": "SUPERVISOR"
  },
  "recipient": {
    "agent_id": "infra_expert_001",
    "agent_type": "INFRASTRUCTURE_EXPERT"
  },
  "intent": {
    "action": "check_service_status",
    "target": "web-01",
    "service": "nginx"
  },
  "security_level": "CONFIDENTIAL",
  "signature": "SHA256:..."
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 기술 스택 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Server className="w-5 h-5 text-blue-400" />
            백엔드 스택
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• Python 3.11 + FastAPI</li>
            <li>• LangGraph (AI 오케스트레이션)</li>
            <li>• Node.js (MCP Gateway)</li>
            <li>• Docker Compose</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-green-400" />
            프론트엔드 스택
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• Electron + React</li>
            <li>• TypeScript + Tailwind</li>
            <li>• Zustand (상태 관리)</li>
            <li>• WebSocket (실시간)</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-orange-400" />
            데이터베이스
          </h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• PostgreSQL (트랜잭션)</li>
            <li>• MongoDB (로그)</li>
            <li>• Qdrant (벡터 검색)</li>
            <li>• Redis (캐시/세션)</li>
          </ul>
        </div>
      </div>

      {/* 주요 지표 */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-400" />
          시스템 특징 및 성과
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-400">개발 기간 단축</p>
            <p className="text-2xl font-bold text-green-400">67%</p>
            <p className="text-xs text-gray-500">6개월 → 2개월</p>
          </div>
          <div>
            <p className="text-gray-400">MCP 서버 활용</p>
            <p className="text-2xl font-bold text-blue-400">6개</p>
            <p className="text-xs text-gray-500">기존 검증된 MCP</p>
          </div>
          <div>
            <p className="text-gray-400">보안 계층</p>
            <p className="text-2xl font-bold text-red-400">5단계</p>
            <p className="text-xs text-gray-500">Zero-Trust 모델</p>
          </div>
          <div>
            <p className="text-gray-400">관리자 권한</p>
            <p className="text-2xl font-bold text-purple-400">5레벨</p>
            <p className="text-xs text-gray-500">세분화된 RBAC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;